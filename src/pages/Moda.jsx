import { useState, useEffect } from "react";
import Carrito from "../components/Carrito";
import app from "../api/api";
import ToastAlert from "../components/ToastAlert";
import Spinner from "../assets/icons/Spinner";

const Moda = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [toast, setToas] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const res = await app.get("/products");
        const data = res.data;

        const electronicsProducts = data.filter(
          (product) =>
            product.categories.includes("Gamer") ||
            product.categories.includes("CPU"),
        );

        setProductos(electronicsProducts);
      } catch (err) {
        setError("No se pudieron cargar los productos 😭");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setToas(`${producto.name} agregado al carrito`); // ← usa .name
  };

  const cerrarToast = () => {
    setToas("");
  };

  if (loading)
    return (
      <h2 className="text-center mt-10">
        <Spinner />
      </h2>
    );
  if (error) return <h2 className="text-center mt-10 text-red-500">{error}</h2>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-out  ">
      {toast && <ToastAlert message={toast} onClose={cerrarToast} />}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Productos - Gamers
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((producto, index) => (
          <div
            key={`${producto.id}-${index}`}
            className="bg-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={producto.image}
              alt={producto.name}
              className="w-full h-64 object-contain p-4 animate-flip-down animate-once animate-duration-[3000ms] animate-delay-500"
            />
            <div className="p-4 flex flex-col flex-grow justify-between text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">
                {producto.name}
              </h2>

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
