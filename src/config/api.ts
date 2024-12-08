export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  endpoints: {
    generate: '/analyze/documentation/generate',
  },
} as const;