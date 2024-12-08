import { API_CONFIG } from '../config/api';
import type { DocumentationRequest, DocumentationResponse } from '../types/documentation';

export async function generateDocumentation(data: DocumentationRequest): Promise<DocumentationResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.generate}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate documentation');
    }

    return await response.json();
  } catch (error) {
    return {
      status: 'error',
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}