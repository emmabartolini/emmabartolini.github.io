import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://emmabartolini.xyz',
  integrations: [tailwind()],
  output: 'static',
});
