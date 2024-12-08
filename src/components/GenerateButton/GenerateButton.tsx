import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
}

export function GenerateButton({ onClick, loading }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
    >
      {loading ? 'Generating...' : 'Generate Documentation'}
    </button>
  );
}