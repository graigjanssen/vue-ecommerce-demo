import apiClient from "./";
import { Product } from "./types";

const productService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await apiClient.get<Product[]>("/products");
    return response.data;
  },
  async getProduct(id: number): Promise<Product> {
    const response = await apiClient.get<Product>(`/product/${id}`);
    return response.data;
  },
};

export default productService;
