'use client';

import { useState, useRef } from 'react';
import { X, Upload, Check, AlertCircle, Linkedin } from 'lucide-react';

interface LinkedInProfile {
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

interface LinkedInImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (profile: LinkedInProfile) => void;
}

type UploadState = 'idle' | 'uploading' | 'success' | 'error' | 'preview';

export default function LinkedInImportModal({
  isOpen,
  onClose,
  onImport,
}: LinkedInImportModalProps) {
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [error, setError] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [extractedProfile, setExtractedProfile] = useState<LinkedInProfile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = async (file: File) => {
    if (!file.type.includes('pdf')) {
      setError('Please upload a PDF file');
      setUploadState('error');
      return;
    }

    setUploadState('uploading');
    setError('');

    try {
      // Import the API function dynamically
      const { importLinkedInPDF } = await import('@/lib/api/linkedin');
      const profile = await importLinkedInPDF(file);

      setExtractedProfile(profile);
      setUploadState('preview');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process PDF. Please try again.');
      setUploadState('error');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleConfirm = () => {
    if (extractedProfile) {
      onImport(extractedProfile);
      handleClose();
    }
  };

  const handleClose = () => {
    setUploadState('idle');
    setError('');
    setExtractedProfile(null);
    onClose();
  };

  const handleRetry = () => {
    setUploadState('idle');
    setError('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl border border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Import from LinkedIn</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {uploadState === 'idle' && (
            <>
              {/* Instructions */}
              <div className="mb-6 bg-gray-900 rounded-xl p-5 border border-gray-700">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-blue-400">📋</span>
                  How to Export Your LinkedIn Profile
                </h3>
                <ol className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-blue-400 font-medium">1.</span>
                    <span>Go to LinkedIn.com → Me → Settings & Privacy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 font-medium">2.</span>
                    <span>Click "Get a copy of your data"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 font-medium">3.</span>
                    <span>Select "Download larger data archive"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 font-medium">4.</span>
                    <span>Wait for email, download the ZIP</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 font-medium">5.</span>
                    <span>Extract and find "Profile.pdf"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 font-medium">6.</span>
                    <span>Upload it here</span>
                  </li>
                </ol>
              </div>

              {/* Dropzone */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
                  isDragging
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600 bg-gray-900'
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">
                      Drop your LinkedIn PDF here, or click to browse
                    </p>
                    <p className="text-sm text-gray-400">
                      Maximum file size: 5MB
                    </p>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInput}
                  className="hidden"
                  aria-label="Upload PDF file"
                />
              </div>
            </>
          )}

          {uploadState === 'uploading' && (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="text-white font-medium mb-2">Processing your PDF...</p>
              <p className="text-sm text-gray-400">
                Extracting profile data from your LinkedIn export
              </p>
            </div>
          )}

          {uploadState === 'error' && (
            <div className="py-12">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-white font-medium mb-2 text-center">Upload Failed</p>
              <p className="text-sm text-gray-400 text-center mb-6">{error}</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleRetry}
                  className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {uploadState === 'preview' && extractedProfile && (
            <div className="space-y-6">
              {/* Success Banner */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Profile Extracted Successfully</p>
                  <p className="text-sm text-gray-400">
                    Review the details below and confirm to import
                  </p>
                </div>
              </div>

              {/* Profile Preview */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-5 space-y-4">
                <div>
                  <h4 className="text-xs font-medium text-gray-400 mb-1">NAME</h4>
                  <p className="text-white">{extractedProfile.name}</p>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-gray-400 mb-1">HEADLINE</h4>
                  <p className="text-white">{extractedProfile.headline}</p>
                </div>

                {extractedProfile.summary && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-1">ABOUT</h4>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {extractedProfile.summary}
                    </p>
                  </div>
                )}

                {extractedProfile.experience.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-2">
                      EXPERIENCE ({extractedProfile.experience.length})
                    </h4>
                    <div className="space-y-2">
                      {extractedProfile.experience.slice(0, 2).map((exp, idx) => (
                        <div key={idx} className="text-sm">
                          <p className="text-white font-medium">{exp.title}</p>
                          <p className="text-gray-400">
                            {exp.company} • {exp.duration}
                          </p>
                        </div>
                      ))}
                      {extractedProfile.experience.length > 2 && (
                        <p className="text-xs text-gray-500">
                          +{extractedProfile.experience.length - 2} more
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {extractedProfile.skills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-2">SKILLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {extractedProfile.skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {extractedProfile.skills.length > 6 && (
                        <span className="px-2.5 py-1 text-gray-500 text-xs">
                          +{extractedProfile.skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleRetry}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Upload Different PDF
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 px-6 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg transition-colors font-medium"
                >
                  Confirm & Import
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
