const {resolve} = require('path')

const  { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const dts = require("vite-plugin-dts");

module.exports = function defineLibraryConfig(dirname) {
  return defineConfig({
    plugins: [
      vue(),
      dts({
        entryRoot: resolve(dirname, "src"),
        tsconfigPath: resolve(dirname, "tsconfig.json")
      })
    ],
    build: {
      lib: {
        entry: resolve(dirname, "src/index.ts"),
        formats: ["cjs", "es"],
        fileName: "build"
      },
      outDir: resolve(dirname, "dist"),
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue"
          }
        }
      }
    }
  });
}