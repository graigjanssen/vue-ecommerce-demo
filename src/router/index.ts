import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/Home.vue";
import ProductList from "../pages/ProductList.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
