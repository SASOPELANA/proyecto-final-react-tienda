import NavBar from "./NavBar";
import CarritoIcon from "../assets/icons/CarritoIcon.jsx";
import StoreIcon from "../assets/icons/StoreIcon.jsx";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 my-4">
      <h1 className="text-gray-800 size-6">
        <StoreIcon />
      </h1>
      <NavBar />

      <h1 className="text-gray-800 size-6">
        <CarritoIcon />
      </h1>
    </div>
  );
};

export default Header;
