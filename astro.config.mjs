import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://klavionik.dev",
  experimental: {
    assets: true
  },
  integrations: [
    tailwind()
  ],
});
