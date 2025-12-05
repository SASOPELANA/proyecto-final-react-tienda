import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";
import app from "../api/api";
import ToastAlert from "./ToastAlert";

const myApisRest = app;

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [toast, setToas] = useState("");

  useEffect(() => {
    const getProductos = async () => {
      try {
        setLoading(true);

        const res = await myApisRest.get("/products");
        setProductos(res.data);
        setError(null);
      } catch (error) {
        setError("Hubo un error al cargar los productos");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setToas(`${producto.name} agregado al carrito`);
  };

  const cerrarToast = () => {
    setToas("");
  };

  if (loading) {
    return <h2 className="text-center mt-10">Cargando...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {toast && <ToastAlert message={toast} onClose={cerrarToast} />}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Productos
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={producto.image}
              alt={producto.name}
              className="w-full h-64 object-contain p-4"
            />
            <div className="p-4 flex flex-col flex-grow justify-between text-center">
              <h3 className="font-bold text-lg text-gray-800">
                {producto.name}
              </h3>
              <p className="text-pretty text-gray-600 text-sm mb-3 line-clamp-3">
                {producto.description}
              </p>
              <p className="text-gray-900 font-bold text-xl mb-3">
                ${producto.price}
              </p>
              <p className="flex flex-wrap justify-center gap-2 mb-4">
                {producto.categories?.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-2 py-1 text-xs rounded-full"
                  >
                    {cat.trim()}
                  </span>
                ))}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  aria-label={`Agregar ${producto.name} al carrito`}
                >
                  Agregar al carrito
                </button>
                <Link
                  to={`/detalle/${producto.id}`}
                  state={{ producto }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </section>
  );
};

export default Productos;
