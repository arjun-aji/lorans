import React from 'react';

interface ServiceIconProps {
  type: 'scissors' | 'spa' | 'facial' | 'makeup' | 'waxing' | 'hand' | string;
  className?: string;
}

export default function ServiceIcon({ type, className = 'w-6 h-6' }: ServiceIconProps) {
  switch (type) {
    case 'scissors':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4L8.5 11.7M8.5 12.3L20 20" />
        </svg>
      );
    case 'spa':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z" />
          <path d="M12 3a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'facial':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M9 10h.01M15 10h.01" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M12 4c-3 0-5 2-5 4" />
        </svg>
      );
    case 'makeup':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3l12 12M18 15l3 3-3 3-3-3M3 6l3-3 3 3" />
          <circle cx="7" cy="17" r="3" />
        </svg>
      );
    case 'waxing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4h12v4H6z" />
          <path d="M7 8v12h10V8" />
          <path d="M10 12h4" />
        </svg>
      );
    case 'hand':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-4 0v4M14 4a2 2 0 0 0-4 0v6M10 6a2 2 0 0 0-4 0v8a6 6 0 0 0 12 0v-3" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
