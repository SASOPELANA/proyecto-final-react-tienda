import axios from "axios";

// Usando mi Apis Rest - Node y Firebase
const api = axios.create({
  // get de todos los productos
  baseURL: "https://apis-rest-node-ts-firebase.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
