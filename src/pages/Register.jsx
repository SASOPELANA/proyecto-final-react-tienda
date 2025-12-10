import { Helmet } from "react-helmet-async";
import { FaGoogle, FaFacebook, FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";
import ImgTienda from "../../public/img-tienda-2.webp";
import IconTiendaOnline from "../../public/tienda-en-linea.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validaciones
    if (!email || !password || !confirmPassword) {
      setFormError("Todos los campos son requeridos");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      setFormError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/register", {
        email,
        password,
      });

      toast.success("¡Te has registrado con éxito! Redirigiendo al login...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        "Error al registrarse. Intenta con otro correo.";
      setFormError(errorMsg);
      toast.error(errorMsg);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Registro - Mi Tienda</title>
        <meta
          name="description"
          content="Crea una cuenta para disfrutar de una experiencia de compra personalizada y acceder a ofertas exclusivas."
        />
      </Helmet>
      <div>
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div>
                <img
                  src={IconTiendaOnline}
                  alt="Workflow"
                  className="w-20 mx-auto"
                />
              </div>
              <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                  Registrarse
                </h1>
                <div className="w-full flex-1 mt-8">
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      disabled={loading}
                      className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="bg-white p-2 rounded-full">
                        <FaGoogle className="text-red-500" />
                      </div>
                      <span className="ml-4 cursor-pointer">
                        Registrarse con Google
                      </span>
                    </button>

                    <button
                      type="button"
                      disabled={loading}
                      className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="bg-white p-2 rounded-full">
                        <FaFacebook className="text-blue-600" />
                      </div>
                      <span className="ml-4 cursor-pointer">
                        Registrarse con Facebook
                      </span>
                    </button>
                  </div>

                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      O Registrarse por correo electrónico
                    </div>
                  </div>

                  <form className="mx-auto max-w-xs" onSubmit={handleRegister}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                      id="email"
                      type="email"
                      placeholder="Correo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                    />

                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                      required
                    />

                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirmar Contraseña"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={loading}
                      required
                    />
                    {formError && (
                      <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                        {formError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      <FaUserPlus className="w-6 h-6 -ml-2" />
                      <span className="ml-3 cursor-pointer">
                        {loading ? "Registrando..." : "Registrate"}
                      </span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      ¿Ya tienes cuenta?
                      <Link
                        to="/login"
                        className="border-b border-gray-500 border-dotted text-blue-500 hover:text-blue-700 ml-1"
                      >
                        Inicia sesión aquí
                      </Link>
                    </p>

                    <p className="mt-4 text-xs text-gray-600 text-center">
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        &nbsp; Terminos y Condiciones
                      </a>
                      &nbsp; - &nbsp;
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Politica de Privacidad
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                <img
                  src={ImgTienda}
                  alt="Tienda"
                  className="h-full rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

