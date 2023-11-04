import i18n from "astro-i18n"
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://klavionik.dev",
  compressHTML: true,
  trailingSlash: "always",
  integrations: [
    i18n(),
    tailwind()
  ],
});
