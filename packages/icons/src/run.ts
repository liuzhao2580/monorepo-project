import fs from "fs";
import path from "path";
import * as lucide from "lucide";

// 将 lucide 图标重命名为 PascalCase + Lucide
function renameLucideExports() {
  const allExports = Object.keys(lucide).filter((k) => /^[A-Z]/.test(k));
  return allExports.map((name) => `${name} as ${name}Lucide`);
}

// 将文件名转为 PascalCase + 后缀（如 Svg, Png）
function toPascalCaseWithExt(filename: string) {
  const ext = path.extname(filename).slice(1);
  const nameWithoutExt = filename.replace(/\.\w+$/, "");
  const pascalName = nameWithoutExt.replace(/(^\w|-\w)/g, (m) => m.replace("-", "").toUpperCase());
  const extPascal = ext.charAt(0).toUpperCase() + ext.slice(1);
  return pascalName + extPascal;
}

async function generateIconsExports() {
  const assetsDir = path.resolve("src/assets");
  const files = fs.existsSync(assetsDir)
    ? fs.readdirSync(assetsDir).filter((f) => /\.(svg|png|jpg|jpeg)$/.test(f))
    : [];

  const renamedLucide = renameLucideExports();
  const lucideExportLine = `export { ${renamedLucide.join(", ")} } from 'lucide'`;

  const assetExports = files
    .map((f) => `export const ${toPascalCaseWithExt(f)} = '/src/assets/${f}';`)
    .join("\n");

  const output = `// AUTO-GENERATED FILE, DO NOT EDIT.\n\n${lucideExportLine}\n\n${assetExports}\n`;

  const outputPath = path.resolve("src/index.ts");
  fs.writeFileSync(outputPath, output, "utf8");

  console.log(`✅ Generated ${outputPath}`);
}

generateIconsExports().catch((e) => {
  console.error("❌ Failed to generate icon exports:", e);
  process.exit(1);
});
