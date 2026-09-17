import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/**
 * ESLint configuration (flat config, ESLint 9+).
 * Project: vanilla JavaScript (ES Modules), no TypeScript.
 */
export default [
  // Global ignores (build artifacts and dependencies)
  {
    ignores: [
      "dist/**",
      "docs/**",
      "out/**",
      "node_modules/**",
      "package-lock.json",
    ],
  },

  // ESLint recommended rules
  js.configs.recommended,

  // Application code: browser environment
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser },
    },
  },

  // Config / tooling files: Node environment
  {
    files: ["*.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node },
    },
  },

  // Tests (Vitest): browser (jsdom) + Node
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Disable ESLint rules that conflict with Prettier (must be last)
  prettier,
];
