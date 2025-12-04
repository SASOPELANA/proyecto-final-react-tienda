const Carrito = ({ carrito = [], setCarrito }) => {
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 md:px-0">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800">
          Carrito
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
              {carrito.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-gray-600">
                    ${Number(item.price).toFixed(3)}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-green-600 text-2xl font-semibold mb-4 flex justify-between items-center">
              <span>Total:</span>
              <span>${Number(total).toFixed(3)}</span>
            </div>

            <button
              type="button"
              onClick={vaciarCarrito}
              className="w-full md:w-auto text-white bg-purple-500 hover:bg-purple-600 font-semibold py-2 px-4 rounded-md transition"
            >
              Vaciar Carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
