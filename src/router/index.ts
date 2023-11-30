import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/Home.vue";
import ProductList from "../pages/ProductList.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
