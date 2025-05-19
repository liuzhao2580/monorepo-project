import reactEslint from "@pmm/eslint-config/react";
import tseslint from "typescript-eslint";
export default tseslint.config([
  ...reactEslint,
  {
    rules: {},
  },
]);
