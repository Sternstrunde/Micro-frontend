import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/index",
      name: "index",
      component: import("../views/index/index.vue"),
    },
    {
      path: "/select",
      name: "select",
      component: import("../views/select/index.vue"),
    },
  ],
});
