<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import productService from "./services/productService";
import { Product } from "./services/types";

export default defineComponent({
  setup() {
    const products = ref<Product[]>([]);

    onMounted(async () => {
      try {
        products.value = await productService.getAllProducts();
      } catch (error) {
        console.error(error);
      }
      console.log("products: ", products.value);
    });

    return { products };
  },
});
</script>
