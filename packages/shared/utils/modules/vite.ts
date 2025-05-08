import { resolve } from "path"
/** 端口号 */
export const PortNumber = {
  Server: 6789,
  React: 5678,
  Vue: 4567
}
export const ViteOptions = {
  alias: (__dirname: string) => {
    return {
      "@": resolve(__dirname, "src"),
      "@shared": resolve(__dirname, "../shared")
    }
  },
  proxy: {
    "/api": {
      target: `http://127.0.0.1:${PortNumber.Server}`,
      changeOrigin: true
    }
  },
}