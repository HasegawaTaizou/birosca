import { createRouter, createWebHistory } from "vue-router";

//INDEX
import Index from "@/pages/Index.vue";
import Home from "@/pages/Home.vue";
import Acais from "@/pages/Acais.vue";
import Snacks from "@/pages/Snacks.vue";
import Diverses from "@/pages/Diverses.vue";
import Drinks from "@/pages/Drinks.vue";
//LOGIN
import Login from "@/pages/Login.vue";
// DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import DashboardFoodsManagement from "@/pages/dashboard/FoodsManagement.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    props: true,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        redirect: "/dashboard/snack",
        component: DashboardFoodsManagement,
      },
      {
        path: "/dashboard/:typeFood",
        component: DashboardFoodsManagement,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
