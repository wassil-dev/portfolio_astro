import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from 'astro-sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://ouassil-dahimene.dev',
  integrations: [sitemap()],
  output: 'static',
  integrations: [tailwind()],
});
