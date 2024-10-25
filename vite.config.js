import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/kuayu": {
        target: "https://api.yujn.cn/", //跨域地址
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/kuayu/, ""), //重写路径,替换/api
      },
    },
  },
});
