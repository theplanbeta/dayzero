"""
LinkedIn PDF Import API Endpoint

Allows mentors to import their LinkedIn profile data from a PDF export.
Uses Gemini AI to intelligently parse and structure the profile information.
"""

import logging
from typing import Annotated
from fastapi import (
    APIRouter,
    File,
    UploadFile,
    HTTPException,
    status
)
from fastapi.responses import JSONResponse

from ..schemas.linkedin_import import (
    LinkedInProfileResponse,
    LinkedInImportErrorResponse
)
from ..services.linkedin_parser import (
    parse_linkedin_pdf,
    LinkedInParserError,
    PDFExtractionError,
    GeminiParsingError
)

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api/import",
    tags=["Import"]
)

# File size limit: 5MB
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB in bytes


@router.post(
    "/linkedin",
    response_model=LinkedInProfileResponse,
    status_code=status.HTTP_200_OK,
    summary="Import LinkedIn profile from PDF",
    description="""
    Upload a LinkedIn profile PDF export to automatically extract and structure mentor profile data.

    **Process:**
    1. Validates uploaded file is a PDF under 5MB
    2. Extracts text content from PDF using pdfplumber
    3. Parses text with Google Gemini AI to structure data
    4. Returns structured JSON profile data

    **Requirements:**
    - File must be a PDF (application/pdf)
    - File size must be under 5MB
    - PDF must be a LinkedIn profile export
    - GEMINI_API_KEY environment variable must be set

    **Security:**
    - File type validation
    - Size limit enforcement
    - Text sanitization before AI processing

    **Returns:**
    Structured profile data including:
    - Basic info (name, headline, location, summary)
    - Work experience history
    - Education background
    - Skills, languages, certifications
    """,
    responses={
        200: {
            "description": "Profile successfully imported",
            "model": LinkedInProfileResponse
        },
        400: {
            "description": "Invalid file or parsing error",
            "model": LinkedInImportErrorResponse
        },
        413: {
            "description": "File too large (>5MB)",
            "model": LinkedInImportErrorResponse
        },
        500: {
            "description": "Server error during processing",
            "model": LinkedInImportErrorResponse
        }
    }
)
async def import_linkedin_profile(
    file: Annotated[
        UploadFile,
        File(description="LinkedIn profile PDF export (max 5MB)")
    ]
):
    """
    Import and parse a LinkedIn profile from PDF.

    The endpoint accepts a LinkedIn PDF export and returns structured
    mentor profile data extracted using AI.
    """
    logger.info(f"LinkedIn import request received: {file.filename}")

    # Validate file type
    if file.content_type != "application/pdf":
        logger.warning(f"Invalid file type: {file.content_type}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "InvalidFileType",
                "detail": f"File must be a PDF. Received: {file.content_type}"
            }
        )

    # Validate filename has .pdf extension
    if not file.filename or not file.filename.lower().endswith('.pdf'):
        logger.warning(f"Invalid filename: {file.filename}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "InvalidFileName",
                "detail": "File must have .pdf extension"
            }
        )

    try:
        # Read file content and check size
        file_content = await file.read()
        file_size = len(file_content)

        logger.info(f"File size: {file_size} bytes")

        if file_size > MAX_FILE_SIZE:
            logger.warning(f"File too large: {file_size} bytes (limit: {MAX_FILE_SIZE})")
            raise HTTPException(
                status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                detail={
                    "error": "FileTooLarge",
                    "detail": f"File size {file_size} bytes exceeds 5MB limit"
                }
            )

        if file_size == 0:
            logger.warning("Empty file uploaded")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail={
                    "error": "EmptyFile",
                    "detail": "Uploaded file is empty"
                }
            )

        # Validate PDF magic number (security check)
        # PDF files must start with %PDF- (hex: 25 50 44 46 2D)
        PDF_MAGIC_NUMBER = b'%PDF-'
        if not file_content.startswith(PDF_MAGIC_NUMBER):
            logger.warning("Invalid PDF: magic number check failed")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail={
                    "error": "InvalidPDF",
                    "detail": "File does not appear to be a valid PDF document"
                }
            )

        # Create a file-like object from bytes for pdfplumber
        from io import BytesIO
        pdf_file = BytesIO(file_content)

        # Parse the LinkedIn PDF
        logger.info("Starting PDF parsing...")
        profile_data = parse_linkedin_pdf(pdf_file)

        logger.info(f"Successfully imported profile for: {profile_data.get('name', 'Unknown')}")

        # Return structured profile data
        return LinkedInProfileResponse(**profile_data)

    except PDFExtractionError as e:
        logger.error(f"PDF extraction failed: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "PDFExtractionError",
                "detail": str(e)
            }
        )

    except GeminiParsingError as e:
        logger.error(f"Gemini AI parsing failed: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "GeminiParsingError",
                "detail": str(e)
            }
        )

    except LinkedInParserError as e:
        logger.error(f"LinkedIn parser error: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "LinkedInParserError",
                "detail": str(e)
            }
        )

    except Exception as e:
        logger.exception(f"Unexpected error during LinkedIn import: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={
                "error": "InternalServerError",
                "detail": "An unexpected error occurred during import. Please try again."
            }
        )

    finally:
        # Clean up
        await file.close()


@router.get(
    "/linkedin/status",
    summary="Check LinkedIn import service status",
    description="Check if LinkedIn import service is configured and available"
)
async def check_import_status():
    """
    Check if the LinkedIn import service is properly configured.

    Returns:
    - available: Whether service is ready to use
    - gemini_configured: Whether GEMINI_API_KEY is set
    """
    import os

    gemini_api_key = os.getenv("GEMINI_API_KEY")
    is_configured = bool(gemini_api_key)

    return {
        "available": is_configured,
        "gemini_configured": is_configured,
        "message": "Service is ready" if is_configured else "GEMINI_API_KEY not configured"
    }
