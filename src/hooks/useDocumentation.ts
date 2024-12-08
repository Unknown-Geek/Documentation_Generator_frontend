import { useState } from 'react';
import type { DocumentationResponse } from '../types/documentation';
import { generateDocumentation } from '../api/documentation';
import type { SupportedLanguage, SupportedTemplate, SupportedFormat } from '../constants/languages';

export function useDocumentation() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<SupportedLanguage>('python');
  const [template, setTemplate] = useState<SupportedTemplate>('default');
  const [format, setFormat] = useState<SupportedFormat>('markdown');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DocumentationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!code.trim()) {
      setError('Please enter some code');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await generateDocumentation({
        code,
        language,
        template,
        format,
      });

      if (response.status === 'error') {
        setError(response.error || 'Failed to generate documentation');
      } else {
        setResult(response);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    code,
    setCode,
    language,
    setLanguage,
    template,
    setTemplate,
    format,
    setFormat,
    loading,
    result,
    error,
    handleGenerate,
  };
}