import React from 'react';

export function Button({ children, className = '', disabled, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
