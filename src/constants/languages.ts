export const SUPPORTED_LANGUAGES = [
  'python',
  'javascript',
  'typescript',
  'go',
  'java',
  'cpp',
  'rust',
] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export const SUPPORTED_TEMPLATES = ['default', 'detailed', 'api'] as const;
export type SupportedTemplate = typeof SUPPORTED_TEMPLATES[number];

export const SUPPORTED_FORMATS = ['markdown', 'html', 'asciidoc'] as const;
export type SupportedFormat = typeof SUPPORTED_FORMATS[number];