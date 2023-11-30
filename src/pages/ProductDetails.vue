<template>
  <div class="product-detail">
    <h1>{{ productsStore.productDetails.title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/store/productsStore";

export default defineComponent({
  setup() {
    const productsStore = useProductsStore();
    const route = useRoute();
    const productId =
      typeof route.params.id === "string" ? parseInt(route.params.id, 10) : 0;

    onMounted(() => {
      productsStore.fetchProductDetails(productId);
    });

    return { productsStore };
  },
});
</script>
