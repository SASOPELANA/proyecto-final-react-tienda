import { useState, useEffect } from "react";
import Carrito from "../components/Carrito";

const Moda = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        // Filtrar solo productos de moda
        const modaAll = data;

        // Mezclar y tomar 3 productos al azar
        const randomModa = modaAll
          .sort(() => 0.4 - Math.random()) // mezcla el array
          .slice(0, 4); // toma 5 aleatorios

        setProductos(randomModa);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los productos 😭");
        setLoading(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto.title} agregado al carrito`);
  };

  if (loading) return <h2 className="text-center mt-10">Cargando...</h2>;
  if (error) return <h2 className="text-center mt-10 text-red-500">{error}</h2>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Colección de Moda (Productos Random)
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
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </section>
  );
};

export default Moda;
