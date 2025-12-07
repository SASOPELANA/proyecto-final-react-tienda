import Productos from "../components/Productos.jsx";
import { SearchProvider } from "../context/SearchContext";
import Buscador from "../components/Search";

const Inicio = () => {
  return (
    <SearchProvider>
      <Buscador />
      <Productos />
    </SearchProvider>
  );
};

export default Inicio;
