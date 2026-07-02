import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://supportyouthdjs.com",
  output: "static",
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  }
});
