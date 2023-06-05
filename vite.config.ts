import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";
import fs from "fs";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    copy({
      targets: [
        {
          src: "./login/*",
          dest: "./dist/login",
        },
      ],
    }),
    createHtmlPlugin({
      template: "public/index.html",
      inject: {
        data: {
          title: "官网",
        },
      },
    }),
    visualizer({
      filename: "test.html", //生成分析网页文件名
      open: true,
      gzipSize: true,
      brotliSize: true,
      /**
       * 图表类型
       * 默认: treemap
       *
       * 可选值: treemap, sunburst, network, raw-data, list
       *
       * sunburst, treemap: 用于查找大bundle
       */
      template: "treemap",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        postcssImport
      ],
    },
  },
  build: {
    minify:"terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger:true
      },
    },
    outDir: "1.0.0",
    cssMinify: true,
  },
  server: {
    host: true,
    open: true,
    port: 443,
    https: {
      key: fs.readFileSync("cert/localhost+1-key.pem"), // 读取我们上面生成的公钥
      cert: fs.readFileSync("cert/localhost+1.pem"), // 读取我们上面生成的证书
    },
  },
});
