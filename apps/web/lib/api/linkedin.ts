// API client for LinkedIn import functionality

export interface LinkedInProfile {
  name: string;
  headline: string;
  summary: string;  // Backend uses 'summary' not 'about'
  location?: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description?: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    field?: string;
    year?: string;  // Backend uses 'year' not 'years'
  }>;
  skills: string[];
  languages: string[];
  certifications?: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Import LinkedIn profile data from a PDF export
 * @param file - The LinkedIn Profile.pdf file
 * @returns Parsed profile data
 */
export async function importLinkedInPDF(file: File): Promise<LinkedInProfile> {
  // Validate file
  if (!file.type.includes('pdf')) {
    throw new Error('Please upload a PDF file');
  }

  // Check file size (5MB max - must match backend limit)
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_SIZE) {
    throw new Error('File size exceeds 5MB limit');
  }

  // Create FormData
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${API_URL}/api/import/linkedin`, {
      method: 'POST',
      body: formData,
      // Note: Don't set Content-Type header - browser will set it with boundary for multipart/form-data
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // Handle FastAPI error format where detail can be an object
      let errorMessage = `Failed to process LinkedIn PDF (${response.status})`;
      if (typeof errorData.detail === 'string') {
        errorMessage = errorData.detail;
      } else if (errorData.detail?.detail) {
        errorMessage = errorData.detail.detail;
      } else if (errorData.message) {
        errorMessage = errorData.message;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection and try again.');
    }

    // Re-throw other errors
    throw error;
  }
}

/**
 * Update mentor profile with LinkedIn data
 * @param profileData - Extracted LinkedIn profile data
 * @param token - Authentication token
 */
export async function updateMentorProfileWithLinkedIn(
  profileData: LinkedInProfile,
  token: string
): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/api/mentors/profile/linkedin`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
        errorData.detail ||
        'Failed to update profile with LinkedIn data'
      );
    }
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection and try again.');
    }
    throw error;
  }
}
