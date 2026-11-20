import { getAllowedOrigins } from './cors.js';

describe('getAllowedOrigins', () => {
  it('uses the local frontend origin when no production origin is configured', () => {
    expect(getAllowedOrigins()).toEqual(['http://localhost:5173']);
  });

  it('parses a comma-separated origin allowlist', () => {
    expect(
      getAllowedOrigins('https://helpdesk.vercel.app, https://preview.vercel.app'),
    ).toEqual([
      'https://helpdesk.vercel.app',
      'https://preview.vercel.app',
    ]);
  });
});
