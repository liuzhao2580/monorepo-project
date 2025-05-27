import { defineConfig } from "unocss";
import baseConfig from "@pmm/unocss-config";
export default defineConfig({
  ...baseConfig,
  shortcuts: {
    "font-color-primary": "text-[#1890ff]",
    "font-color-base": "text-[#fff]",
    "border-radius-base": "rounded-[6px]",

    "layout-header-height": "h-[var(--layout-header-height)]",
    "layout-footer-height": "h-[var(--layout-footer-height)]",
    "layout-header-bg-color": "bg-[#101d37]",
    "layout-footer-bg-color": "bg-[#101d37]",
    "layout-bg-color": "bg-[#fff]",
  },
});
