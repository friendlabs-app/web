import { defineConfig } from 'astro/config';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { site, websiteSchema } from './src/data/site.ts';

export default defineConfig({
  site: site.origin,
  output: 'static',
  trailingSlash: 'always',
  // Keep bundled scripts external so the CSP never needs inline exceptions.
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [
    {
      name: 'website-schema-csp',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const path = new URL('_headers', dir);
          const headers = await readFile(path, 'utf8');
          const hash = createHash('sha256').update(websiteSchema).digest('base64');
          await writeFile(
            path,
            headers.replace("script-src 'self'", `script-src 'self' 'sha256-${hash}'`),
          );
        },
      },
    },
  ],
});
