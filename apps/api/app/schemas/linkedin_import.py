"""
Pydantic schemas for LinkedIn PDF import API
"""
from typing import List, Optional
from pydantic import BaseModel, Field


class ExperienceItem(BaseModel):
    """Single work experience entry"""
    title: str = Field(..., description="Job title/position")
    company: str = Field(..., description="Company/organization name")
    duration: str = Field(..., description="Time period (e.g., 'Jan 2020 - Present')")
    description: Optional[str] = Field(None, description="Job description and achievements")

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Senior Software Engineer",
                "company": "Tech Corp",
                "duration": "Jan 2020 - Present",
                "description": "Led development of microservices architecture"
            }
        }


class EducationItem(BaseModel):
    """Single education entry"""
    degree: str = Field(..., description="Degree or qualification")
    school: str = Field(..., description="Institution name")
    field: Optional[str] = Field(None, description="Field of study")
    year: Optional[str] = Field(None, description="Graduation year or date range")

    class Config:
        json_schema_extra = {
            "example": {
                "degree": "Bachelor of Science",
                "school": "MIT",
                "field": "Computer Science",
                "year": "2018"
            }
        }


class LinkedInProfileResponse(BaseModel):
    """
    Structured mentor profile data extracted from LinkedIn PDF.

    This is the response from the /api/import/linkedin endpoint.
    """
    name: str = Field(..., description="Full name")
    headline: str = Field(..., description="Professional headline/title")
    summary: Optional[str] = Field(None, description="Profile summary/about section")
    location: Optional[str] = Field(None, description="Current location (city, country)")

    experience: List[ExperienceItem] = Field(
        default_factory=list,
        description="Work experience history"
    )
    education: List[EducationItem] = Field(
        default_factory=list,
        description="Educational background"
    )
    skills: List[str] = Field(
        default_factory=list,
        description="Professional skills"
    )
    languages: List[str] = Field(
        default_factory=list,
        description="Languages spoken"
    )
    certifications: List[str] = Field(
        default_factory=list,
        description="Professional certifications"
    )

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Jane Doe",
                "headline": "Senior Product Manager at Tech Innovations Inc.",
                "summary": "Experienced product leader with 10+ years in SaaS...",
                "location": "San Francisco, CA",
                "experience": [
                    {
                        "title": "Senior Product Manager",
                        "company": "Tech Innovations Inc.",
                        "duration": "Jan 2020 - Present",
                        "description": "Leading product strategy for AI platform"
                    }
                ],
                "education": [
                    {
                        "degree": "MBA",
                        "school": "Stanford Graduate School of Business",
                        "field": "Business Administration",
                        "year": "2015"
                    }
                ],
                "skills": ["Product Management", "Agile", "Data Analysis", "Leadership"],
                "languages": ["English", "Spanish"],
                "certifications": ["Certified Scrum Product Owner (CSPO)"]
            }
        }


class LinkedInImportErrorResponse(BaseModel):
    """Error response for LinkedIn import failures"""
    error: str = Field(..., description="Error type")
    detail: str = Field(..., description="Detailed error message")

    class Config:
        json_schema_extra = {
            "example": {
                "error": "PDFExtractionError",
                "detail": "Invalid PDF file format"
            }
        }


class LinkedInImportStats(BaseModel):
    """Statistics about the imported LinkedIn profile"""
    total_experience_years: Optional[int] = Field(None, description="Estimated years of experience")
    total_skills: int = Field(..., description="Number of skills extracted")
    total_certifications: int = Field(..., description="Number of certifications")
    has_education: bool = Field(..., description="Whether education data was found")

    class Config:
        json_schema_extra = {
            "example": {
                "total_experience_years": 10,
                "total_skills": 15,
                "total_certifications": 3,
                "has_education": True
            }
        }


class LinkedInImportDetailedResponse(BaseModel):
    """
    Extended response with both profile data and import statistics.

    Useful for providing feedback to users about what was imported.
    """
    profile: LinkedInProfileResponse
    stats: LinkedInImportStats

    class Config:
        json_schema_extra = {
            "example": {
                "profile": {
                    "name": "Jane Doe",
                    "headline": "Senior Product Manager",
                    "summary": "Experienced product leader...",
                    "location": "San Francisco, CA",
                    "experience": [],
                    "education": [],
                    "skills": ["Product Management", "Agile"],
                    "languages": ["English"],
                    "certifications": ["CSPO"]
                },
                "stats": {
                    "total_experience_years": 10,
                    "total_skills": 2,
                    "total_certifications": 1,
                    "has_education": True
                }
            }
        }
