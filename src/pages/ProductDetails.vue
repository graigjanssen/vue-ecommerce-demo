<template>
  <div class="product-detail">
    <div v-if="productsStore.isLoading" class="loading">Loading...</div>
    <div v-else-if="productDetails">
      <h1>{{ productDetails.title }}</h1>
      <div v-if="productDetails.rating" class="rating">
        <span>
          {{ productDetails.rating.rate }} / 5 ({{
            productDetails.rating.count
          }})
        </span>
      </div>
      <section class="product-detail--main">
        <div class="image-wrapper">
          <img :src="productDetails.image" :alt="productDetails.title" />
        </div>
        <div class="product-detail--details">
          <h3>Category: {{ productDetails.category }}</h3>
          <p>{{ productDetails.description }}</p>
          <h4>{{ formatPrice(productDetails.price) }}</h4>
          <button class="btn btn-primary" @click="addToCart">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
    <div v-else>No Product Found</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/store/productsStore";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/utilities/formatters";

const productsStore = useProductsStore();
const cartStore = useCartStore();
const route = useRoute();
const productId =
  typeof route.params.id === "string" ? parseInt(route.params.id, 10) : 0;

onMounted(() => {
  productsStore.fetchProductDetails(productId);
});

const productDetails = computed(() => productsStore.productDetails);

const addToCart = () => {
  if (productDetails.value) {
    cartStore.addToCart(productDetails.value);
  }
};
</script>

<style scoped lang="scss">
.product-detail {
  width: 75%;
  margin: 2rem auto;
  &--main {
    display: flex;
    gap: 2rem;
    img {
      max-height: 400px;
    }
  }
}
</style>
