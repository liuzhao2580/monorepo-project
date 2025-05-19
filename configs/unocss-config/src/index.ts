import { defineConfig, presetWind3, presetAttributify, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
      ],
      exclude: [
        "node_modules",
        "dist",
        ".git",
        "**/*.test.*",
        "**/*.spec.*",
      ],
    },
  },
  presets: [
    presetWind3(),
    presetAttributify(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
