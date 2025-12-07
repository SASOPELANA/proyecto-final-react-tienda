import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import Spinner from "../assets/icons/Spinner.jsx";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa";

const Productos = () => {
  const { filteredProducts, loadingFilter, errorFilter } = useSearch();
  const { addToCart } = useCart();

  if (loadingFilter) {
    return (
      <h2 className="text-center mt-10">
        <Spinner />{" "}
      </h2>
    );
  }

  if (errorFilter) {
    return <h2 className="text-center mt-10 text-red-500">{errorFilter}</h2>;
  }

  if (filteredProducts.length === 0) {
    return <p className="text-center">No se encontraron productos.</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-out">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Tienda de Productos
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((producto) => (
          <div
            key={producto.id}
            className="bg-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={producto.image}
              alt={producto.name}
              className="w-full h-64 object-contain p-4 animate-flip-down animate-once animate-duration-[3000ms] animate-delay-500"
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
                  onClick={() => addToCart(producto)}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  aria-label={`Agregar ${producto.name} al carrito`}
                >
                  <FaCartPlus /> Agregar al carrito
                </button>
                <Link
                  to={`/detalle/${producto.id}`}
                  state={{ producto }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  aria-label={`Ver detalles de ${producto.name}`}
                >
                  <FaInfoCircle /> Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;

