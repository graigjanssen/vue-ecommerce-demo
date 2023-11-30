<template>
  <div class="products">
    <div v-if="productsStore.isLoading" class="loading">
      Loading Products...
    </div>
    <div v-else-if="productsStore.products.length > 0" class="product-list">
      <div
        v-for="product in productsStore.products"
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

    const formatPrice = (value: number): string => {
      return new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
      }).format(value);
    };

    return { productsStore, formatPrice };
  },
});
</script>

<style lang="scss">
.product-list {
  width: 50%;
  margin: 2rem auto;
}
.product {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  .image-wrapper {
    img {
      max-height: 320px;
    }
  }
}
</style>
