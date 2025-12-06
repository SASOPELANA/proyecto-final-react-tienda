import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoLugar from "../../public/lugar-tienda-random.png";

{
  /* Cerrar la MENU HAMBURGUESA luego de 5 segundos de hacer click */
}
const NavBar = () => {
  const [open, setOpen] = useState(false);

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
        <Link to="mapa">
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
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
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
                Login
              </Link>
              <Link
                className="bg-gray-100 text-green-400 px-5 py-2.5 rounded-md cursor-pointer"
                to="/register"
              >
                Register
              </Link>
            </div>

            {/* BOTÓN HAMBURGUESA */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden block rounded-sm bg-green-400/80 p-2.5 text-gray-200"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden bg-gray-300 shadow-lg absolute left-0 w-full px-6 py-4 animate-fadeIn">
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
              <Link to="/projects" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>

            <hr />

            <li>
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
