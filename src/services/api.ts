import axios from "axios";

const api = axios.create({
  baseURL: "https://6629923b67df268010a10e4d.mockapi.io/",
});

export default api;