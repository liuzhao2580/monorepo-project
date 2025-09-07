import reactEslint from "@pmm/eslint-config/react";
import tseslint from "typescript-eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
export default tseslint.config([
  ...reactEslint,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {},
  },
]);
