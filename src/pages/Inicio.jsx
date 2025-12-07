import { Helmet } from "react-helmet-async";
import Productos from "../components/Productos.jsx";
import { SearchProvider } from "../context/SearchContext";
import Buscador from "../components/Search";

const Inicio = () => {
  return (
    <>
      <Helmet>
        <title>Inicio - Mi Tienda</title>
        <meta
          name="description"
          content="Encuentra los mejores productos en nuestra tienda online. Explora nuestro catálogo y aprovecha las ofertas."
        />
      </Helmet>
      <SearchProvider>
        <Buscador />
        <Productos />
      </SearchProvider>
    </>
  );
};

export default Inicio;

