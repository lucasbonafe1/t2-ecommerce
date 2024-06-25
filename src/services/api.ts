import axios from "axios";

const api = axios.create({
  baseURL: "https://667591c6a8d2b4d072f09f1d.mockapi.io/",
});

export default api;