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
    removeFromCart(id: number) {
      this.items = this.items.filter((item) => id !== item.id);
    },
  },
});
