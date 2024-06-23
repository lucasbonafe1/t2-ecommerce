import api from "./api";
// import { Admin } from "react-native" 

export const getAdmin = async () => {
    const { data } = await api.get("/admin");
    return data;
  };
  
export const postAdmin = async (newAdmin: {}) => {
    const { data } = await api.post("/admin", newAdmin);
    return data;
};