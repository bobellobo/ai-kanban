
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export type HelloResponse = {
  message: string;
};

export async function fetchJson<TResponse>(
  path: string,
  init?: RequestInit,
): Promise<TResponse> {
  const method = (init?.method ?? 'GET').toUpperCase();
  const shouldSendJsonContentType = method !== 'GET' && method !== 'HEAD';

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      ...(shouldSendJsonContentType ? { 'Content-Type': 'application/json' } : {}),
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}.`);
  }

  return (await response.json()) as TResponse;
}