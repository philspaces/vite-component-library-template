import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import jestDom from "eslint-plugin-jest-dom";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["dist/"],
  },
  // Base configs
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  // React specific configs
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...reactHooks.configs.recommended,
    plugins: {
      "jest-dom": jestDom,
      storybook,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...jestDom.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
  // Prettier config must be last
  prettierConfig,
);
