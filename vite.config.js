// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projectDetail: resolve(__dirname, "src/pages/ProjectDetail/index.html"),
      },
    },
  },
});
