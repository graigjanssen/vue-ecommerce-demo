<template>
  <div class="products">
    <div v-if="productsStore.isLoading" class="loading">
      Loading Products...
    </div>
    <div v-else-if="productsStore.products.length > 0" class="product-list">
      <div v-for="product in productsStore.products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <div v-else>No Products Found</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useProductsStore } from "../store/productsStore";

export default defineComponent({
  setup() {
    const productsStore = useProductsStore();

    onMounted(() => {
      productsStore.fetchProducts();
    });

    return { productsStore };
  },
});
</script>
