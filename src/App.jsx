import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import About from "./pages/About.jsx";
import Contacto from "./pages/Contacto.jsx";
import Mapa from "./pages/Mapa.jsx";
import Error404 from "./components/Error404.jsx";
import Review from "./pages/Review.jsx";
import ProductoDetalles from "./pages/DetallesProductos.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="font-montserrat pt-[66px] animate-pulse animate-once animate-duration-[1000ms] animate-delay-500 ">
      <Header />
      <Routes>
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/detalle/:id" element={<ProductoDetalles />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
