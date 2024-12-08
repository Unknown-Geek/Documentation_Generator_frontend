import React from 'react';
import { Settings } from 'lucide-react';
import type { SupportedTemplate, SupportedFormat } from '../../constants/languages';
import { SUPPORTED_TEMPLATES, SUPPORTED_FORMATS } from '../../constants/languages';

interface OptionsPanelProps {
  template: SupportedTemplate;
  format: SupportedFormat;
  onTemplateChange: (template: SupportedTemplate) => void;
  onFormatChange: (format: SupportedFormat) => void;
}

export function OptionsPanel({
  template,
  format,
  onTemplateChange,
  onFormatChange,
}: OptionsPanelProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium flex items-center mb-4">
        <Settings className="h-5 w-5 mr-2 text-blue-600" />
        Options
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Template
          </label>
          <select
            value={template}
            onChange={(e) => onTemplateChange(e.target.value as SupportedTemplate)}
            className="block w-full p-2 border border-gray-200 rounded-lg"
          >
            {SUPPORTED_TEMPLATES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Format
          </label>
          <select
            value={format}
            onChange={(e) => onFormatChange(e.target.value as SupportedFormat)}
            className="block w-full p-2 border border-gray-200 rounded-lg"
          >
            {SUPPORTED_FORMATS.map((f) => (
              <option key={f} value={f}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}