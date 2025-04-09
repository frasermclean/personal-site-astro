// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://wwww.frasermclean.com",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
});
