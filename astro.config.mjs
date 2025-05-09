import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ouassil-dahimene.dev', // Your custom domain
  output: 'static',
  integrations: [tailwind()],
});
