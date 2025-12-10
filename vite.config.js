import { defineConfig } from "vite";

export default defineConfig({
    base: "/portfolio/",
    optimizeDeps: {
        include: ["@tortoise-code-z/shell-io"],
    },

    build: {
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
});
