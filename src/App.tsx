import React from 'react';
import { Header } from './components/Header/Header';
import { CodeInput } from './components/CodeInput/CodeInput';
import { OptionsPanel } from './components/OptionsPanel/OptionsPanel';
import { DocumentationPreview } from './components/DocumentationPreview';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { GenerateButton } from './components/GenerateButton/GenerateButton';
import { useDocumentation } from './hooks/useDocumentation';

function App() {
  const {
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
  } = useDocumentation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CodeInput
              code={code}
              language={language}
              onCodeChange={setCode}
              onLanguageChange={setLanguage}
            />

            <OptionsPanel
              template={template}
              format={format}
              onTemplateChange={setTemplate}
              onFormatChange={setFormat}
            />

            <GenerateButton onClick={handleGenerate} loading={loading} />

            {error && <ErrorMessage message={error} />}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Documentation Preview</h2>
            {result?.documentation ? (
              <DocumentationPreview
                content={result.documentation}
                format={result.format || 'markdown'}
              />
            ) : (
              <div className="text-center text-gray-500 py-12">
                Generate documentation to see the preview
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;