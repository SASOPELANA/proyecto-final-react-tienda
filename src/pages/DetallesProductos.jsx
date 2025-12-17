import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NumeroProducto from "../components/ProductosConIndice";
import { FaArrowLeft } from "react-icons/fa";

const DetallesProductos = () => {
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return (
      <>
        <Helmet>
          <title>Producto no encontrado - Mi Tienda</title>
          <meta
            name="description"
            content="El producto que buscas no está disponible o no se ha podido cargar."
          />
        </Helmet>
        <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg text-center">
          <p className="text-red-500 mb-4">No se pudo cargar el producto</p>
          <Link to="/">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 mx-auto">
              <FaArrowLeft /> Volver a Productos
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Detalles de ${producto.name} - Mi Tienda`}</title>
        <meta name="description" content={producto.description} />
      </Helmet>
      <section className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 border-4 border-gray-500/50">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Detalles del producto # {<NumeroProducto id={producto.id} />}
          </h1>
          <img
            src={producto.image}
            alt={producto.name}
            className="w-64 h-64 object-contain rounded-lg border mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {producto.name}
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Descripción:</strong> {producto.description}
          </p>
          <p className="text-xl font-bold text-gray-900 mb-2">
            Precio: ${producto.price}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {producto.categories?.map((cat, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 text-xs rounded-full"
              >
                {cat.trim()}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Link to={`/`}>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2 cursor-pointer">
                <FaArrowLeft /> Volver
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetallesProductos;
