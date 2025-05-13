import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
  import { PortNumber } from "@pmm/shared"
console.log(PortNumber)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pmm/shared": path.resolve(__dirname, '../../../packages/shared')
    },
  }
})
