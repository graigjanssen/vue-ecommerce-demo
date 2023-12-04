import { defineStore } from "pinia";
import { Product } from "@/services/types";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[],
  }),
  actions: {
    addToCart(item: Product) {
      this.items.push(item);
    },
    removeFromCart(itemToRemove: Product) {
      this.items = this.items.filter((item) => item !== itemToRemove);
    },
  },
});
