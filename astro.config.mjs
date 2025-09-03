import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://portfolio-t1f.pages.dev/',
  integrations: [tailwind(), react()],
});
