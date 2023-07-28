import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",

      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/hangar",
      name: "hangar",

      component: () => import("../views/HangarView.vue"),
    },
    {
      path: "/missions",
      name: "missions",

      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/loadout",
      name: "loadout",

      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/shop",
      name: "shop",

      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/battle",
      name: "battle",

      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/recap",
      name: "recap",

      // component: () => import('../views/AboutView.vue')
    },
  ],
});

export default router;
