import path from "path"
/** 端口号 */
export const PortNumber = {
  Server: 6789,
  React: 5678,
  Vue: 4567,
  test: 8888
}
export function createViteAlias(rootDir: string): Record<string, string> {
  // 在 Node 构建环境下调用
  return {
    '@': path.resolve(rootDir, 'src'),
    '@pmm/shared': path.resolve(rootDir, '../packages/shared/src')
  };
}

export const proxy = {
  '/api': {
    target: `http://127.0.0.1:${PortNumber.Server}`,
    changeOrigin: true
  }
};