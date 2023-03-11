/*
 * @Author: jincheng
 * @Date: 2023-03-02 17:07:11
 * @FilePath: /component-vite/src/index.ts
 */
import { createApp } from "vue";

// 简单的组件
// import SButton from "./button";
// createApp(SButton).mount("#app");

// 支持vue template 模板
import SFCButton from './button/SFCButton.vue'
createApp(SFCButton).mount('#app')

// 支持 jsx 语法

// import JSXButton from './button/JSXButton'
// createApp(JSXButton).mount("#app");

// const name:string = "hello TS"
// console.log(name)