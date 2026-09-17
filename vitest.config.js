import { defineConfig } from "vitest/config";

/**
 * Vitest configuration.
 * jsdom environment so components that manipulate the DOM can be tested.
 */
export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.js"],
  },
});
