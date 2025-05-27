import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react(), svgr()],
  assetsInclude: ["**/*.svg"], // 确保 Vite 处理 SVG 文件
  server: {
    port: 10086,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
