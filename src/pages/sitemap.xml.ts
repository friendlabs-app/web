import { site, sitePages } from '../data/site';

export function GET() {
  const urls = sitePages
    .map((path) => `<url><loc>${new URL(path, site.origin).href}</loc></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
}
