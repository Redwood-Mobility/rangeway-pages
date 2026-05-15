import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rangeway.co',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  redirects: {
    '/summit': '/network/summit'
  }
});
