import { createRouter, createWebHistory } from "vue-router";

import Index from "@/pages/Index.vue";
import Home from "@/pages/Home.vue";
import Drinks from "@/pages/Drinks.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/drinks",
        name: "Drinks",
        component: Drinks,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
