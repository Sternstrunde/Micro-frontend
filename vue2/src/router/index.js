import Vue from "vue";
import VueRouter from "vue-router";
import Energy from "../views/energy/index.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/energy",
      name: "Energy",
      component: Energy,
    },
  ],
});
