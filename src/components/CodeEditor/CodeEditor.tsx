import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { SupportedLanguage } from '../../constants/languages';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language: SupportedLanguage;
}

export function CodeEditor({ code, onChange, language }: CodeEditorProps) {
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200">
      <div className="absolute right-2 top-2 text-xs text-gray-500 bg-white px-2 py-1 rounded-md shadow-sm">
        {language}
      </div>
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[400px] p-4 font-mono text-sm bg-transparent absolute inset-0 resize-none focus:outline-none z-10"
          style={{ color: 'transparent', caretColor: 'black' }}
          spellCheck={false}
          placeholder={`Enter your ${language} code here...`}
        />
        <SyntaxHighlighter
          language={language}
          style={vs}
          customStyle={{
            margin: 0,
            padding: '1rem',
            height: '400px',
            backgroundColor: 'transparent',
          }}
        >
          {code || `// Enter your ${language} code here...`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}