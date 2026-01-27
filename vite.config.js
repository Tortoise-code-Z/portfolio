// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path"; // Necesitarás importar esto

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        detail: resolve(__dirname, "./src/pages/ProjectDetail/index.html"),
      },
    },
  },
});
