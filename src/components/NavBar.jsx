import { Link } from "react-router-dom";
import FlechaIcons from "../assets/icons/FlechaIcons.jsx";

const NavBar = () => {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-700">
          <li>
            <Link
              to={"/"}
              className="block transition-colors hover:text-gray-900 hover:font-medium"
            >
              Inicio
            </Link>
          </li>

          <li className="rtl:rotate-180"></li>
          <FlechaIcons />

          <li>
            <Link
              to={"/moda"}
              className="block transition-colors hover:text-gray-900 hover:font-medium"
            >
              Moda
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <FlechaIcons />
          </li>

          <li>
            <Link
              to={"/about"}
              className="block transition-colors hover:text-gray-900 hover:font-medium"
            >
              Nosotros
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default NavBar;
