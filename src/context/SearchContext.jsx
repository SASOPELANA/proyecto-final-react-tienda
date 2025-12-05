import { createContext, useState, useContext, useEffect } from "react";
import app from "../api/api";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [errorFilter, setErrorFilter] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingFilter(true);
      setErrorFilter(null);
      try {
        const response = await app.get("/products");
        const allProducts = response.data;

        if (busqueda) {
          const lowerCaseBusqueda = busqueda.toLowerCase();
          const filtered = allProducts.filter(
            (product) =>
              product.name.toLowerCase().includes(lowerCaseBusqueda) ||
              product.description.toLowerCase().includes(lowerCaseBusqueda) ||
              product.price.toString().includes(lowerCaseBusqueda),
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(allProducts); // Show all products if search is empty
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setErrorFilter("Hubo un error al buscar los productos.");
        setFilteredProducts([]);
      } finally {
        setLoadingFilter(false);
      }
    };

    const debounceSearch = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(debounceSearch);
  }, [busqueda]);

  return (
    <SearchContext.Provider
      value={{
        busqueda,
        setBusqueda,
        filteredProducts,
        loadingFilter,
        errorFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
