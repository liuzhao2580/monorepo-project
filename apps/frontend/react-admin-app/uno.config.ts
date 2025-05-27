import { defineConfig } from "unocss";
import baseConfig from "@pmm/unocss-config";
export default defineConfig({
  ...baseConfig,
  shortcuts: {
    "font-color-primary": "text-[#1890ff]",
    "font-color-base": "text-[#fff]",
    "border-radius-base": "rounded-[6px]",
    "layout-header-height": "h-[46px]",
    "layout-footer-height": "h-[40px]",
    "layout-bg-color": "bg-[#fff]",
  },
});
