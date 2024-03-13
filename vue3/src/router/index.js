import { createRouter, createWebHashHistory } from "vue-router";

export const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "hello",
      component: import("../components/HelloWorld.vue"),
    },
  ],
});
