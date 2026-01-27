// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path"; // Necesitarás importar esto

export default defineConfig({
  base: "/portfolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // Añade aquí la ruta real a tu HTML de detalle
        detail: resolve(__dirname, "src/pages/ProjectDetail/index.html"),
      },
    },
  },
});
