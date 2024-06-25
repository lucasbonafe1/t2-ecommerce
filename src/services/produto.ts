import api from "./api";
// import { Admin } from "react-native"

export const getProduto = async () => {
    const { data } = await api.get("/produtos");
    return data;
  };

export const postProduto = async (newProduto: {}) => {
    const { data } = await api.post("/produtos", newProduto);
    return data;
};

