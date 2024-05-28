import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, tsconfigPath: "./tsconfig.json" }),
    svgr({ include: "**/*.svg?react" }),
  ],
  build: {
    cssMinify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "React-iPhone-Layout",
      fileName: (format) => `react-iphone-layout.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "ReactIPhoneLayout.css";
          return assetInfo.name as string;
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        banner: '"use client";',
        interop: "auto",
      },
    },
  },
  assetsInclude: ["/*.png"],
});
