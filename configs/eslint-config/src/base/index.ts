import tseslint from 'typescript-eslint'
import js from '@eslint/js';
import globals from 'globals'
export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ['**/*.{ts,tsx,js,json}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tseslint.parser,
      globals: globals.browser
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      "no-console": "off",
      "no-await-in-loop": "warn",
      "require-await": "off",
      indent: ["warn", 2, { SwitchCase: 1 }],
      eqeqeq: "warn",
      "@typescript-eslint/no-unused-vars": "error",
      semi: ["error", "never"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "no-unreachable": "off",
      "no-var": "error",
      "no-multi-spaces": "error",
      "no-whitespace-before-property": "error",
      "block-spacing": "error",
      "comma-spacing": ["error", { before: false, after: true }],
      "array-bracket-spacing": ["error", "never"],
      "key-spacing": ["error", { beforeColon: false }],
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "space-infix-ops": "error",
      "spaced-comment": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "no-trailing-spaces": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
  },
)