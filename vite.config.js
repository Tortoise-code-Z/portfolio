// vite.config.js del Portfolio
import { defineConfig } from "vite";

export default defineConfig({
    base: "/portfolio/",

    build: {
        rollupOptions: {
            external: ["/vender/shellio/shell-io.es.js"],
        },
    },
});
