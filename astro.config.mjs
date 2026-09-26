// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://techonni.github.io",
  base: "/b2b-directory",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
