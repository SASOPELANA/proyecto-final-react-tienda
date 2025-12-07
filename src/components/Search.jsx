// src/components/Search.jsx
import { useSearch } from "../context/SearchContext.jsx";

const Buscador = ({
  placeholder = "Buscar por nombre, descripción o precio",
  label = "",
  className = "",
}) => {
  const { busqueda, setBusqueda } = useSearch();

  return (
    <div className={`buscador-nad ${className} flex justify-center m-6`}>
      {label && (
        <label className="buscador-label-nad mb-2 block ">{label}</label>
      )}

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder={placeholder}
        className="border border-indigo-500 p-2 rounded w-full max-w-md sm:max-w-lg mx-auto my-4 "
      />
    </div>
  );
};

export default Buscador;
