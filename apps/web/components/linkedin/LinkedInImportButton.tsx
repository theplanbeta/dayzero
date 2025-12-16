'use client';

import { Linkedin } from 'lucide-react';

interface LinkedInImportButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LinkedInImportButton({
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: LinkedInImportButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-[#0077B5] hover:bg-[#006399] text-white shadow-lg shadow-[#0077B5]/20',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-[#0077B5]',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg transition-all duration-200
        flex items-center gap-3 font-medium
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:ring-offset-2 focus:ring-offset-gray-900
        ${className}
      `}
      aria-label="Import from LinkedIn"
    >
      <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
        <Linkedin className="w-4 h-4 text-[#0077B5]" />
      </div>
      <span>Import from LinkedIn</span>
    </button>
  );
}
