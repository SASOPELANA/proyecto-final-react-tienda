import {
  FaShoppingCart,
  FaTrash,
  FaTimes,
  FaCreditCard,
} from "react-icons/fa";

const Carrito = ({ carrito = [], setCarrito }) => {
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (indexToRemove) => {
    setCarrito(carrito.filter((_, index) => index !== indexToRemove));
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 md:px-0">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-4">
          <FaShoppingCart /> Carrito
        </h1>
        <hr className="border-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          Carrito de Compras
        </h2>
        {carrito.length === 0 ? (
          <p className="text-center text-xl text-gray-500 mt-6">
            El carrito está vacío
          </p>
        ) : (
          <>
            <div className="flex flex-col gap-3 mb-6">
              {carrito.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">
                      ${Number(item.price).toFixed(3)}
                    </span>
                    <button
                      onClick={() => eliminarDelCarrito(index)}
                      aria-label={`Eliminar ${item.name} del carrito`}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-green-600 text-2xl font-semibold mb-4 flex justify-between items-center">
              <span>Total:</span>
              <span>${Number(total).toFixed(3)}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="button"
                onClick={vaciarCarrito}
                className="w-full md:w-auto flex-grow text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-md transition flex items-center justify-center gap-2"
                aria-label="Vaciar todo el carrito de compras"
              >
                <FaTrash /> Vaciar Carrito
              </button>
              <button
                type="button"
                className="w-full md:w-auto flex-grow text-white bg-green-500 hover:bg-green-600 font-semibold py-2 px-4 rounded-md transition flex items-center justify-center gap-2"
                aria-label="Proceder al pago"
              >
                <FaCreditCard /> Pagar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;

