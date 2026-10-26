import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://orisa.woodwolfdigital.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
});
