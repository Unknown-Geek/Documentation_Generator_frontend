import React from 'react';
import { Book } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">Documentation Generator</h1>
        </div>
      </div>
    </header>
  );
}