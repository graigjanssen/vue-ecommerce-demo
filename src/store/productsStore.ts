import { defineStore } from "pinia";
import productService from "@/services/productService";
import { Product } from "../services/types";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    productDetails: {} as Product | null,
    isLoading: false,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await productService.getAllProducts();
        this.products = response;
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchProductDetails(id: number) {
      this.isLoading = true;
      try {
        const response = await productService.getProduct(id);
        this.productDetails = response;
      } catch (error) {
        console.error("Error fetching product details: ", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
