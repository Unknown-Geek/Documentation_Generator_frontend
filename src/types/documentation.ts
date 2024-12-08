export interface DocumentationRequest {
  code: string;
  language: string;
  template?: string;
  format?: string;
  title?: string;
  description?: string;
}

export interface DocumentationMetadata {
  template: string;
  language: string;
  generated_at: string;
  blocks_count: number;
  metrics: Record<string, any>;
}

export interface DocumentationResponse {
  status: 'success' | 'error';
  documentation?: string;
  error?: string;
  format?: string;
  metadata?: DocumentationMetadata;
}