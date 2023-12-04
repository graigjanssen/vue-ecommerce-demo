<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Product List</router-link></li>
      </ul>
    </nav>
    <router-link to="/cart">
      <div class="cart">CART: {{ cartStore.items.length }}</div>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from "./store/cartStore";

const cartStore = useCartStore();
</script>

<style lang="scss">
header {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #013;
}
nav > ul {
  display: flex;
  gap: 1rem;
  list-style-type: none;
}
</style>
