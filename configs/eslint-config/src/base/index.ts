import tseslint from "typescript-eslint";
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "@pmm/prettier-config";
export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx,js,vue}"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tseslint.parser,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier,
    },
    rules: {
      "prettier/prettier": ["error", prettierConfig],
      "no-console": "off",
      "no-await-in-loop": "warn",
      "require-await": "off",
      indent: ["warn", 2, { SwitchCase: 1 }],
      eqeqeq: "warn",
      "@typescript-eslint/no-unused-vars": "error",
      // 强制语句以分号结尾
      semi: ["error", "always"],
      // 强制使用双引号
      quotes: ["error", "double", { avoidEscape: true }],
      // 多行结构的最后一个元素保留逗号
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "no-unreachable": "off",
      "no-var": "error",
      "no-multi-spaces": "error",
      "no-whitespace-before-property": "error",
      "block-spacing": "error",
      "comma-spacing": ["error", { before: false, after: true }],
      "array-bracket-spacing": ["error", "never"],
      "key-spacing": ["error", { beforeColon: false }],
      "object-curly-spacing": ["error", "always"],
      "space-infix-ops": "error",
      "spaced-comment": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "no-trailing-spaces": "error",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
