export interface DocumentationRequest {
  code: string;
  language: string;
  template?: string;
  format?: string;
  title?: string;
  description?: string;
}

export interface DocumentationResponse {
  status: 'success' | 'error';
  documentation?: string;
  error?: string;
  format?: string;
  metadata?: {
    template: string;
    language: string;
    generated_at: string;
    blocks_count: number;
    metrics: any;
  };
}