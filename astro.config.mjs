// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mckellarchristian.com',
  base: '/',
  outDir: './docs', // Change the build output folder to 'docs'
	integrations: [mdx(), sitemap()],
});
