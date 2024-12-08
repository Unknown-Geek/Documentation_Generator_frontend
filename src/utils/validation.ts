import type { DocumentationRequest } from '../types/documentation';
import type { SupportedLanguage, SupportedTemplate, SupportedFormat } from '../constants/languages';
import { SUPPORTED_LANGUAGES, SUPPORTED_TEMPLATES, SUPPORTED_FORMATS } from '../constants/languages';

export function validateDocumentationRequest(request: DocumentationRequest): string | null {
  if (!request.code.trim()) {
    return 'Code is required';
  }

  if (!SUPPORTED_LANGUAGES.includes(request.language as SupportedLanguage)) {
    return `Unsupported language: ${request.language}`;
  }

  if (request.template && !SUPPORTED_TEMPLATES.includes(request.template as SupportedTemplate)) {
    return `Unsupported template: ${request.template}`;
  }

  if (request.format && !SUPPORTED_FORMATS.includes(request.format as SupportedFormat)) {
    return `Unsupported format: ${request.format}`;
  }

  return null;
}