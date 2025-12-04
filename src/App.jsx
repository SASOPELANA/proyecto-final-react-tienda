import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import About from "./pages/About.jsx";
import ProductoDetalles from "./pages/DetallesProductos.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="font-montserrat">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/about" element={<About />} />
        <Route path="/detalle/:id" element={<ProductoDetalles />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
