import { Link } from "react-router-dom";
import IconContruccion from "../../public/en-construccion.png";

export function Error404() {
  return (
    <div className="h-screen grid place-items-center text-center px-8 bg-gray-50">
      <div>
        <img
          src={IconContruccion}
          alt="Página en construcción"
          className="w-20 h-20 mx-auto"
        />
        <strong className="mt-10 block text-3xl md:text-4xl font-bold text-black/300 leading-snug">
          Error 404 <br /> Parece que algo salió mal.
        </strong>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          No te preocupes, nuestro equipo ya está trabajando en ello. Por favor,
          intenta actualizar la página o vuelve más tarde.
        </p>
        <Link
          to="/"
          className="inline-block w-full md:w-32 px-4 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-400 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Error404;
