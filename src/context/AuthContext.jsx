import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Función para decodificar el JWT (base64)
  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window.atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (err) {
      console.error("Error al decodificar el token:", err);
      return null;
    }
  };

  // Restaurar usuario desde localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed.token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${parsed.token}`;
          // Asegurarnos de que tenemos los datos decodificados
          const decoded = decodeToken(parsed.token);
          setUser({ ...parsed, ...decoded });
        } else {
          setUser(parsed);
        }
      }
    } catch (err) {
      console.warn("Error restaurando usuario de localStorage:", err);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  // Logeo con mi apis rest
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/auth/login", { email, password });
      const userData = res.data; // {token: "..."}
      const decoded = decodeToken(userData.token);
      const fullUserData = { ...userData, ...decoded };
      
      localStorage.setItem("user", JSON.stringify(fullUserData));
      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
      setUser(fullUserData);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error en login");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
