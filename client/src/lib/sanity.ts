import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: import.meta.env.VITE_SANITY_TOKEN,
});

export const sanityQuery = async (query: string, params?: Record<string, any>) => {
  try {
    return await sanityClient.fetch(query, params);
  } catch (error) {
    console.error('Sanity query error:', error);
    return null;
  }
};
