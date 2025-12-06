import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import About from "./pages/About.jsx";
import Contacto from "./pages/Contacto.jsx";
import Mapa from "./pages/Mapa.jsx";
import ProductoDetalles from "./pages/DetallesProductos.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="font-montserrat pt-[80px]">
      <Header />
      <Routes>
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/detalle/:id" element={<ProductoDetalles />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
