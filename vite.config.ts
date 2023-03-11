/*
 * @Author: jincheng
 * @Date: 2023-03-02 19:48:25
 * @FilePath: /component-vite/vite.config.ts
 */
import { defineConfig } from "vite";
// 配置支持 vue
import vue from "@vitejs/plugin-vue";
//  转译工具的支持 jsx插件
import vueJsx from "@vitejs/plugin-vue-jsx";

// 配置导出模块类型 并确定导出文件名
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  build: {
    //添加库模式配置
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "CompontentUI", // 注意不能使用中划线
      fileName: "Compontent-UI",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
