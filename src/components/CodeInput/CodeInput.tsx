import React from 'react';
import { FileCode } from 'lucide-react';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import type { SupportedLanguage } from '../../constants/languages';

interface CodeInputProps {
  code: string;
  language: SupportedLanguage;
  onCodeChange: (code: string) => void;
  onLanguageChange: (language: SupportedLanguage) => void;
}

export function CodeInput({ code, language, onCodeChange, onLanguageChange }: CodeInputProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium flex items-center">
          <FileCode className="h-5 w-5 mr-2 text-blue-600" />
          Code Input
        </h2>
        <LanguageSelector value={language} onChange={onLanguageChange} />
      </div>
      <CodeEditor
        code={code}
        onChange={onCodeChange}
        language={language}
      />
    </div>
  );
}