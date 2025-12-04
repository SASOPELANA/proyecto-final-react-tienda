import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="max-w-5xl mx-auto p-6 my-10 bg-white rounded-xl shadow-md sm:p-8 md:p-12
    border-4 border-gray-500/50
    "
    >
      <h1 className="flex justify-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Sobre Nosotros
      </h1>

      <p className="text-gray-700 mb-4 text-base text-pretty sm:text-lg md:text-xl">
        Somos una tienda dedicada a ofrecer productos de alta calidad para todos
        nuestros clientes. Nuestro objetivo es brindar la mejor experiencia de
        compra en línea.
      </p>

      <p className="text-gray-700 mb-4 text-base text-pretty sm:text-lg md:text-xl">
        Cada producto es cuidadosamente seleccionado y probado para asegurar que
        cumpla con nuestros estándares de excelencia. Nos apasiona satisfacer a
        nuestros clientes y hacer que cada compra sea única.
      </p>

      <p className="text-gray-700 text-base text-pretty sm:text-lg md:text-xl">
        ¡Gracias por confiar en nosotros! Estamos comprometidos a seguir
        mejorando y creciendo junto a nuestra comunidad de clientes.
      </p>
      <Link to="/">
        <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer transition-colors  ">
          Volver
        </button>
      </Link>
    </div>
  );
};

export default About;
