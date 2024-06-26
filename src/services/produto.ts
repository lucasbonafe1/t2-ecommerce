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

export const deleteProduto = async (id: {}) => {
  const { data } = await api.delete("/produtos/" + id);
  return data;
};

export const updatePedido = async (id: {}, newProduto: {}) => {
  const { data } = await api.put("/produtos/" + id, newProduto);
  return data;
};

