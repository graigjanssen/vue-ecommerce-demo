<template>
  <div class="shopping-cart">
    <h1>Your Shopping Cart</h1>
    <div v-if="cartStore.items.length === 0">Your cart is empty</div>
    <div v-else>
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <h3>{{ item.title }}</h3>
        <span>{{ formatPrice(item.price) }}</span>
        <button @click="cartStore.removeFromCart(item.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/cartStore";
import { formatPrice } from "@/utilities/formatters";
const cartStore = useCartStore();
</script>

<style lang="scss">
.cart-item {
  display: flex;
  justify-content: space-between;
}
</style>
