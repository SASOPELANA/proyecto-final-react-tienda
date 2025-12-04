import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "./Card";
import { ProductAyuda } from "../types/products.types";

/** @typedef {typeof ProductAyuda} Product */

const Productos = () => {
  /**   @type {[Product[], Function]} */

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-0 align-center">
      <h1 className="text-center text-2xl font-bold">Tienda de Productos</h1>
      <h2 className="text-center text-lg">Lista de productos</h2>
      <div className="grid grid-cols-4 gap-4 align-center  mx-auto px-6">
        {productos.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
