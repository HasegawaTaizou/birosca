import { createRouter, createWebHistory } from "vue-router";

import Index from "@/pages/Index.vue";
import Home from "@/pages/Home.vue";
import Acais from "@/pages/Acais.vue";
import Snacks from "@/pages/Snacks.vue";
import Diverses from "@/pages/Diverses.vue";
import Drinks from "@/pages/Drinks.vue";
// DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import DashboardSnacks from "@/pages/dashboard/Snacks.vue";
//TESTES
import A from "@/pages/A.vue";

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
        path: "/acais",
        name: "Acais",
        component: Acais,
      },
      {
        path: "/snacks",
        name: "Snacks",
        component: Snacks,
      },
      {
        path: "/diverses",
        name: "Diversese",
        component: Diverses,
      },
      {
        path: "/drinks",
        name: "Drinks",
        component: Drinks,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        component: DashboardSnacks,
      },
    ],
  },
  {
    path: "/a",
    name: "A",
    component: A,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
