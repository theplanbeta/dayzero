"""
Authentication Router - Register, Login, Google OAuth
"""

from datetime import timedelta
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from ..database import (
    get_db, User, hash_password, verify_password,
    create_access_token, get_current_user, ACCESS_EXPIRES_MIN
)

router = APIRouter(prefix="/auth", tags=["Authentication"])


# Schemas
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: Optional[str] = None


class UserResponse(BaseModel):
    id: int
    email: str
    name: Optional[str] = None

    class Config:
        from_attributes = True


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class GoogleAuthRequest(BaseModel):
    token: str  # Google ID token


# Endpoints
@router.post("/signup", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def signup(user_data: UserCreate, db: Session = Depends(get_db)):
    """
    Register a new user with email and password.
    """
    # Check if user exists
    existing = db.query(User).filter(User.email == user_data.email).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Create user
    user = User(
        email=user_data.email,
        password_hash=hash_password(user_data.password),
        name=user_data.name
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    # Generate token
    access_token = create_access_token(
        data={"sub": user.email},
        expires_delta=timedelta(minutes=ACCESS_EXPIRES_MIN)
    )

    return TokenResponse(access_token=access_token)


@router.post("/login", response_model=TokenResponse)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """
    Login with email and password (OAuth2 compatible).
    """
    user = db.query(User).filter(User.email == form_data.username).first()

    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"}
        )

    access_token = create_access_token(
        data={"sub": user.email},
        expires_delta=timedelta(minutes=ACCESS_EXPIRES_MIN)
    )

    return TokenResponse(access_token=access_token)


@router.post("/google", response_model=TokenResponse)
async def google_auth(auth_data: GoogleAuthRequest, db: Session = Depends(get_db)):
    """
    Authenticate with Google OAuth.
    Creates account if user doesn't exist.
    """
    try:
        from google.oauth2 import id_token
        from google.auth.transport import requests
        import os

        # Verify Google token
        client_id = os.getenv("GOOGLE_CLIENT_ID")
        if not client_id:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Google OAuth not configured"
            )

        idinfo = id_token.verify_oauth2_token(
            auth_data.token,
            requests.Request(),
            client_id
        )

        email = idinfo.get("email")
        name = idinfo.get("name")
        google_id = idinfo.get("sub")

        if not email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email not provided by Google"
            )

        # Find or create user
        user = db.query(User).filter(User.email == email).first()

        if not user:
            # Create new user with Google auth
            user = User(
                email=email,
                password_hash="",  # No password for Google users
                name=name,
                google_id=google_id
            )
            db.add(user)
            db.commit()
            db.refresh(user)
        elif not user.google_id:
            # Link Google account to existing user
            user.google_id = google_id
            if name and not user.name:
                user.name = name
            db.commit()

        # Generate token
        access_token = create_access_token(
            data={"sub": user.email},
            expires_delta=timedelta(minutes=ACCESS_EXPIRES_MIN)
        )

        return TokenResponse(access_token=access_token)

    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid Google token: {str(e)}"
        )
    except ImportError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Google auth library not installed"
        )


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)):
    """
    Get current authenticated user info.
    """
    return current_user
