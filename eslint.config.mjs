import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      "prettier/prettier": "error"
    }
  }
];

export default eslintConfig;
