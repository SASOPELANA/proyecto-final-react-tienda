import Productos from "../components/Productos.jsx";
import { SearchProvider } from "../context/SearchContext";
import Search from "../components/Search";

const Inicio = () => {
  return (
    <SearchProvider>
      <Search />
      <Productos />
    </SearchProvider>
  );
};

export default Inicio;
