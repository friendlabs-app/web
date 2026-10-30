import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://friendlabs.app',
  output: 'static',
  trailingSlash: 'always',
  // Keep bundled scripts external so the CSP never needs inline exceptions.
  vite: { build: { assetsInlineLimit: 0 } },
});
