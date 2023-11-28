import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://fakestoreapi.com",
  headers: {
    "Content-type": "Application/json",
  },
});

export default apiClient;
