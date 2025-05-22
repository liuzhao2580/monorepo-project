import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  server: {
    port: 10086,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
