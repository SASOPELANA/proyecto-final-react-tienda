import { useSearch } from "../context/SearchContext.jsx";
import { FaSearch } from "react-icons/fa";

const Buscador = ({
  placeholder = "Buscar por nombre, descripción o precio",
  label = "Buscar productos",
  className = "",
}) => {
  const { busqueda, setBusqueda } = useSearch();

  return (
    <div className={`buscador-nad ${className} flex justify-center m-6`}>
      <div className="relative w-full max-w-md sm:max-w-lg">
        <label htmlFor="search-input" className="sr-only">
          {label}
        </label>
        <input
          id="search-input"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder={placeholder}
          className="border border-indigo-500 p-2 pl-10 rounded w-full"
          aria-label={label}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Buscador;
