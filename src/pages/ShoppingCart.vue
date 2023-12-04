<template>
  <div class="shopping-cart">
    <h1>Your Shopping Cart</h1>
    <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
      <h3>{{ item.title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/cartStore";

const cartStore = useCartStore();
</script>
