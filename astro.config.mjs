import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/portfolio_astro/',
  integrations: [tailwind()],
});
