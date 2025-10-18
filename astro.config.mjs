// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://stupendous-puppy-c98b78.netlify.app/',
	integrations: [mdx(), sitemap()],
});
