import { useEffect, useState } from "react";
import Spinner from "../assets/icons/Spinner";
import api from "../api/api";

const NumeroProducto = ({ id }) => {
  const [numero, setNumero] = useState(null);

  useEffect(() => {
    const fetchNumero = async () => {
      try {
        const res = await api.get("/products"); // traemos todos los productos
        const productos = res.data;

        // Buscamos el índice del producto por su id
        const index = productos.findIndex((p) => p.id === id);

        if (index !== -1) setNumero(index + 1); // +1 para que empiece en 1
      } catch (error) {
        console.error("Error al obtener el número del producto:", error);
      }
    };

    fetchNumero();
  }, [id]);

  return numero !== null ? numero : <Spinner />;
};

export default NumeroProducto;
