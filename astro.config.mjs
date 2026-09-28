// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://zunrel.com",
  trailingSlash: "always",
  // Index de recherche Pagefind, créé à la fin de chaque build dans dist/pagefind/.
  integrations: [pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
