import { Helmet } from "react-helmet-async";
import Formulario from "../components/Formulario.jsx";

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - Mi Tienda</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para cualquier consulta o soporte. Rellena el formulario y te responderemos a la brevedad."
        />
      </Helmet>
      <div className="animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-out">
        <Formulario />
      </div>
    </>
  );
};

export default Contacto;

