import type { ESLint } from 'eslint';

const baseConfig: ESLint.ConfigData = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    'no-console': 'warn',
    'eqeqeq': ['error', 'always']
    }
};

export default baseConfig;