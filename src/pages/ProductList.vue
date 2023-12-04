<template>
  <div class="products-page">
    <ProductFilter
      :categories="categories"
      @update:selected-categories="handleCategoryFilter"
    />
    <div class="products">
      <div v-if="productsStore.isLoading" class="loading">
        Loading Products...
      </div>
      <div v-else-if="filteredProducts.length > 0" class="product-list">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product"
        >
          <div class="image-wrapper">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="product-details">
            <router-link
              :to="{ name: 'ProductDetails', params: { id: product.id } }"
            >
              <h2>{{ product.title }}</h2>
            </router-link>
            <p>{{ product.description }}</p>
            <div v-if="product.rating" class="product-rating">
              <span>{{ product.rating.rate }}/5 </span>
              <span>({{ product.rating.count }})</span>
            </div>
            <p>{{ formatPrice(product.price) }}</p>
          </div>
        </div>
      </div>
      <div v-else>No Products Found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useProductsStore } from "../store/productsStore";
import ProductFilter from "@/components/ProductFilter.vue";
import { Product } from "@/services/types";
import { formatPrice } from "@/utilities/formatters";

const productsStore = useProductsStore();

const categories = computed(() => {
  return [...new Set(productsStore.products.map((p) => p.category))];
});

const filteredProducts = ref<Product[]>([]);

onMounted(async () => {
  await productsStore.fetchProducts();
  filteredProducts.value = productsStore.products;
});

const handleCategoryFilter = (selectedCategories: string[]) => {
  if (selectedCategories.includes("all")) {
    filteredProducts.value = productsStore.products;
  } else {
    filteredProducts.value = productsStore.products.filter((product) => {
      return selectedCategories.includes(product.category);
    });
  }
};
</script>

<style lang="scss">
.products-page {
  display: flex;
}
.product-list {
  width: 70%;
  margin: 2rem auto;
}
.product {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  .image-wrapper {
    img {
      max-height: 320px;
      min-width: 225px;
      max-width: 225px;
    }
  }
}
</style>
