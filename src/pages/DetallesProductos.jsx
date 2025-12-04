import { Link, useParams, useLocation } from "react-router-dom";

const DetallesProductos = () => {
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return (
      <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg text-center">
        <p className="text-red-500 mb-4">No se pudo cargar el producto</p>
        <Link to="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors">
            Volver a Productos
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <div
        className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8
       border-4 border-gray-500/50
      "
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Detalles del producto {id}
        </h1>
        <img
          src={producto.image}
          alt={producto.title}
          className="w-64 h-64 object-contain rounded-lg border mb-6"
        />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {producto.title}
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Descripción:</strong> {producto.description}
        </p>
        <p className="text-xl font-bold text-gray-900 mb-2">
          Precio: ${producto.price}
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {producto.category}
        </span>
        <Link to={`/`}>
          <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors">
            Volver
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DetallesProductos;
