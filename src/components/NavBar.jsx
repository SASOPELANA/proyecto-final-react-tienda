import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoLugar from "../../public/lugar-tienda-random.png";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <header className="bg-gray-300 relative z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="mapa"
          className="flex items-center gap-2"
          aria-label="Ver mapa de la tienda"
        >
          <img src={LogoLugar} alt="logo" className="size-10" />
        </Link>

        {/* MENU DESKTOP */}
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 font-medium">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/moda">Gamers</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/about">Nosotros</Link>
              </li>
              <li>
                <Link to="/review">Reseñas</Link>
              </li>
              <li>
                <Link
                  to="/carrito"
                  className="relative"
                  aria-label={`Ver carrito de compras con ${cart.length} artículos`}
                >
                  <FaShoppingCart className="text-2xl" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* BOTONES DERECHA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4 font-semibold">
              <Link
                className="bg-green-400 text-gray-200 px-5 py-2.5 rounded-md cursor-pointer"
                to="/login"
              >
                Iniciar Sesión
              </Link>
              <Link
                className="bg-gray-100 text-green-400 px-5 py-2.5 rounded-md cursor-pointer"
                to="/register"
              >
                Registrarse
              </Link>
            </div>

            {/* BOTÓN HAMBURGUESA */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden block rounded-sm bg-green-400/80 p-2.5 text-gray-200"
              aria-label="Abrir menú de navegación"
              aria-expanded={open}
            >
              <FaBars className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav
          className="md:hidden bg-gray-300 shadow-lg absolute left-0 w-full px-6 py-4 animate-fadeIn"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/moda" onClick={() => setOpen(false)}>
                Gamers
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/review" onClick={() => setOpen(false)}>
                Reseñas
              </Link>
            </li>
            <li>
              <Link
                to="/carrito"
                onClick={() => setOpen(false)}
                className="relative"
                aria-label={`Ver carrito de compras con ${cart.length} artículos`}
              >
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            <hr />

            <li>
              <Link to="/login" onClick={() => setOpen(false)}>
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setOpen(false)}>
                Registrarse
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
