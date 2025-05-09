import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ouassil-dahimene.dev',
  base: '/portfolio_astro',
  output: 'static',
  integrations: [tailwind()],
});
