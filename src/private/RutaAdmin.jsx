import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SnniperColor from "../assets/icons/SnniperColor";

const RutaAdmin = () => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600"></div>
        <SnniperColor className="h-16 w-16 ml-4" />
      </div>
    );
  }

  const userEmail = user?.email || "";

  if (!isAuthenticated || userEmail.trim().toLowerCase() !== "admin@admin.com") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RutaAdmin;
