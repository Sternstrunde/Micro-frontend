import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

const render = () => {
  createApp(App).use(router).mount("#app");
};

if (window.__MIRCO_WEB__) {
  render();
}

// 开始加载结构
export const bootstrap = () => {
  console.log("开始加载");
};

export const mount = () => {
  render();
  console.log("渲染成功");
};

export const unmount = () => {
  console.log("卸载", instance);
};
