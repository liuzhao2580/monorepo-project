import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  declaration: true,
  outDir: "dist",
  entries: ["./src/index", "./src/vue", "./src/react"],
  rollup: {
    emitCJS: false,
  },
  failOnWarn: false, // 可以避免构建因为警告失败
});
