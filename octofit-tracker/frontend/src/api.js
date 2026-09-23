const codespaceName = (import.meta.env.VITE_CODESPACE_NAME || '').trim();

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function apiEndpoint(resource) {
  return `${apiBaseUrl}/api/${resource}/`;
}

export function collectionItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== 'object') return [];

  for (const key of ['results', 'data', 'items', 'users', 'teams', 'activities', 'leaderboard', 'workouts']) {
    if (Array.isArray(payload[key])) return payload[key];
  }

  return [];
}

export async function fetchCollection(resource, signal) {
  const response = await fetch(apiEndpoint(resource), { signal });
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  return collectionItems(await response.json());
}