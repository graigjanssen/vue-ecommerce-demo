<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="products">Product List</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
