import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// 配置 vant的 按需引入组件样式
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "@vant/auto-import-resolver"
import { viteStaticCopy } from "vite-plugin-static-copy"
import path from "node:path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared")
    }
  },
  server: {
    port: 2345,
    host: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:6789",
        changeOrigin: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    viteStaticCopy({
      targets: [
        { src: path.resolve(__dirname, "../shared"), dest: "dist/shared" }
      ]
    })
  ]
})
