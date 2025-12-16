"""
LinkedIn PDF Parser Service

Extracts structured mentor profile data from LinkedIn PDF exports using:
- pdfplumber for PDF text extraction
- Google Gemini AI for intelligent parsing
"""

import os
import json
import logging
from typing import Dict, Any, BinaryIO
import pdfplumber
import google.generativeai as genai

logger = logging.getLogger(__name__)

# Configure Gemini AI
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
else:
    logger.warning("GEMINI_API_KEY not set - LinkedIn parsing will fail")


class LinkedInParserError(Exception):
    """Base exception for LinkedIn parser errors"""
    pass


class PDFExtractionError(LinkedInParserError):
    """Raised when PDF text extraction fails"""
    pass


class GeminiParsingError(LinkedInParserError):
    """Raised when Gemini AI parsing fails"""
    pass


def extract_text_from_pdf(pdf_file: BinaryIO, max_pages: int = 20) -> str:
    """
    Extract text content from LinkedIn PDF file.

    Args:
        pdf_file: Binary file object of the PDF
        max_pages: Maximum number of pages to extract (default 20)

    Returns:
        Extracted text as a string

    Raises:
        PDFExtractionError: If PDF extraction fails
    """
    try:
        text_content = []

        with pdfplumber.open(pdf_file) as pdf:
            # Limit pages to prevent excessive processing
            page_count = min(len(pdf.pages), max_pages)
            logger.info(f"Extracting text from {page_count} pages")

            for page_num, page in enumerate(pdf.pages[:page_count], 1):
                text = page.extract_text()
                if text:
                    text_content.append(text)
                    logger.debug(f"Extracted {len(text)} chars from page {page_num}")

        full_text = "\n\n".join(text_content)

        if not full_text.strip():
            raise PDFExtractionError("No text content extracted from PDF")

        logger.info(f"Successfully extracted {len(full_text)} total characters")
        return full_text

    except pdfplumber.pdfminer.pdfparser.PDFSyntaxError as e:
        logger.error(f"Invalid PDF format: {e}")
        raise PDFExtractionError("Invalid PDF file format")
    except Exception as e:
        logger.error(f"PDF extraction failed: {e}")
        raise PDFExtractionError(f"Failed to extract text from PDF: {str(e)}")


def sanitize_text(text: str, max_length: int = 100000) -> str:
    """
    Sanitize and truncate extracted text for AI processing.

    Args:
        text: Raw extracted text
        max_length: Maximum character length (default 100k)

    Returns:
        Sanitized text
    """
    # Remove excessive whitespace
    text = " ".join(text.split())

    # Truncate if too long
    if len(text) > max_length:
        logger.warning(f"Text truncated from {len(text)} to {max_length} chars")
        text = text[:max_length]

    return text


def parse_with_gemini(pdf_text: str) -> Dict[str, Any]:
    """
    Parse LinkedIn profile text using Google Gemini AI.

    Args:
        pdf_text: Extracted text from LinkedIn PDF

    Returns:
        Structured profile data dictionary

    Raises:
        GeminiParsingError: If Gemini AI parsing fails
    """
    if not GEMINI_API_KEY:
        raise GeminiParsingError("GEMINI_API_KEY environment variable not set")

    try:
        # Use Gemini 2.5 Flash (newest model)
        model = genai.GenerativeModel('models/gemini-2.5-flash')

        # Construct the prompt
        prompt = f"""Extract mentor profile information from this LinkedIn PDF export.
Return ONLY valid JSON with no additional text or markdown formatting.

Required JSON structure:
{{
  "name": "string (full name)",
  "headline": "string (professional headline/title)",
  "summary": "string (about/summary section)",
  "location": "string (city, country)",
  "experience": [
    {{
      "title": "string (job title)",
      "company": "string (company name)",
      "duration": "string (e.g., 'Jan 2020 - Present')",
      "description": "string (job description/achievements)"
    }}
  ],
  "education": [
    {{
      "degree": "string (degree type)",
      "school": "string (institution name)",
      "field": "string (field of study)",
      "year": "string (graduation year or date range)"
    }}
  ],
  "skills": ["string (skill name)"],
  "languages": ["string (language name)"],
  "certifications": ["string (certification name)"]
}}

Important:
- Extract all available information from the profile
- Use empty arrays [] for sections with no data
- Use null or empty string "" for missing individual fields
- Ensure all JSON keys are present
- Do not add markdown code blocks or formatting

LinkedIn PDF Text:
{pdf_text}"""

        logger.info("Sending request to Gemini AI...")

        # Generate content with JSON response
        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                temperature=0.1,  # Low temperature for consistent extraction
                top_p=0.95,
                top_k=40,
                max_output_tokens=4096,
            )
        )

        if not response or not response.text:
            raise GeminiParsingError("Empty response from Gemini AI")

        logger.info("Received response from Gemini AI")
        logger.debug(f"Response text: {response.text[:200]}...")

        # Parse JSON response
        response_text = response.text.strip()

        # Remove markdown code blocks if present
        if response_text.startswith("```json"):
            response_text = response_text[7:]
        if response_text.startswith("```"):
            response_text = response_text[3:]
        if response_text.endswith("```"):
            response_text = response_text[:-3]

        response_text = response_text.strip()

        try:
            profile_data = json.loads(response_text)
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON response: {e}")
            logger.error(f"Response text: {response_text}")
            raise GeminiParsingError(f"Gemini returned invalid JSON: {str(e)}")

        # Validate required fields
        required_fields = ["name", "headline", "experience", "education", "skills"]
        for field in required_fields:
            if field not in profile_data:
                profile_data[field] = [] if field in ["experience", "education", "skills"] else ""

        # Ensure optional fields exist
        if "summary" not in profile_data:
            profile_data["summary"] = ""
        if "location" not in profile_data:
            profile_data["location"] = ""
        if "languages" not in profile_data:
            profile_data["languages"] = []
        if "certifications" not in profile_data:
            profile_data["certifications"] = []

        logger.info("Successfully parsed profile data")
        return profile_data

    except Exception as e:
        if isinstance(e, GeminiParsingError):
            raise
        logger.error(f"Gemini AI parsing failed: {e}")
        raise GeminiParsingError(f"Failed to parse profile with Gemini: {str(e)}")


def parse_linkedin_pdf(pdf_file: BinaryIO) -> Dict[str, Any]:
    """
    Main function to parse LinkedIn PDF and extract structured profile data.

    This combines PDF text extraction and Gemini AI parsing.

    Args:
        pdf_file: Binary file object of LinkedIn PDF export

    Returns:
        Dictionary containing structured mentor profile data

    Raises:
        LinkedInParserError: If parsing fails at any stage
    """
    try:
        # Step 1: Extract text from PDF
        logger.info("Starting LinkedIn PDF parsing")
        pdf_text = extract_text_from_pdf(pdf_file)

        # Step 2: Sanitize text
        pdf_text = sanitize_text(pdf_text)

        # Step 3: Parse with Gemini AI
        profile_data = parse_with_gemini(pdf_text)

        logger.info("LinkedIn PDF parsing completed successfully")
        return profile_data

    except (PDFExtractionError, GeminiParsingError) as e:
        # Re-raise specific errors
        raise
    except Exception as e:
        logger.error(f"Unexpected error during LinkedIn PDF parsing: {e}")
        raise LinkedInParserError(f"Failed to parse LinkedIn PDF: {str(e)}")
