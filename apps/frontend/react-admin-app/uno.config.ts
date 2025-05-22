import { defineConfig } from "unocss";
import baseConfig from "@pmm/unocss-config";

export default defineConfig({
  ...baseConfig,
  shortcuts: {
    "font-color-primary": "text-[#1890ff]",
  },
});
