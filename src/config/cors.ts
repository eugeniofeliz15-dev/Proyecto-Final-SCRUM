const LOCAL_FRONTEND_ORIGIN = 'http://localhost:5173';

export function getAllowedOrigins(configuredOrigins?: string): string[] {
  return (configuredOrigins ?? LOCAL_FRONTEND_ORIGIN)
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}
