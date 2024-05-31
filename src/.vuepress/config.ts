import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "元组件桌面",
  description: "小组件，大世界，尽在元组件桌面",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
