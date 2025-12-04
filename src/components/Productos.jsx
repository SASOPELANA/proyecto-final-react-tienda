import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const APIS = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(APIS)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Hubo un error");
        setLoading(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto.title} agregado al carrito`);
  };

  if (loading) {
    return <h2 className="text-center mt-10">Cargando...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Productos
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={producto.image}
              alt={producto.title}
              className="w-full h-64 object-contain p-4"
            />
            <div className="p-4 flex flex-col flex-grow justify-between text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">
                {producto.title}
              </h2>
              <p className="text-gray-900 font-bold text-xl mb-4">
                ${producto.price}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  aria-label={`Agregar ${producto.title} al carrito`}
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
