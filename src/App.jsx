import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import About from "./pages/About.jsx";
import Contacto from "./pages/Contacto.jsx";
import Mapa from "./pages/Mapa.jsx";
import Error404 from "./components/Error404.jsx";
import Review from "./pages/Review.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductoDetalles from "./pages/DetallesProductos.jsx";
import Carrito from "./pages/Carrito.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RutasProtegidas from "./private/RutasProtegidas.jsx";

function App() {
  return (
    <main className="font-montserrat pt-[64px] animate-pulse animate-once animate-duration-[1000ms] animate-delay-500">
      <Header />
      <Routes>
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/detalle/:id" element={<ProductoDetalles />} />
        <Route path="/review" element={<Review />} />
        <Route element={<RutasProtegidas />}>
          <Route path="/carrito" element={<Carrito />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default App;
