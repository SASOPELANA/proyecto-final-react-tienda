import { Helmet } from "react-helmet-async";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormError("");
    try {
      await login(email, password);
      toast.success("Has iniciado sesión con éxito");
      navigate("/");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Error al iniciar sesión";
      setFormError(errorMsg);
      toast.error(errorMsg);
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión - Mi Tienda</title>
        <meta
          name="description"
          content="Inicia sesión en tu cuenta para acceder a tu historial de compras y gestionar tus datos."
        />
      </Helmet>
      <div>
        <div className="py-20 bg-gray-100 ">
          <div className="flex h-full items-center justify-center ">
            <div className="rounded-lg border border-gray-200 bg-white shadow-md flex-col flex h-full items-center justify-center sm:px-4 mx-4">
              <div className="flex h-full flex-col justify-center gap-4 p-6">
                <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                  <form
                    className="flex flex-col gap-4 pb-4"
                    onSubmit={handleLogin}
                  >
                    <h1 className="mb-4 text-2xl font-bold  ">
                      Iniciar Sesión
                    </h1>
                    <div>
                      <div className="mb-2">
                        <label
                          className="text-sm font-medium text-gray-900 "
                          htmlFor="email"
                        >
                          Correo Electronico:
                        </label>
                      </div>
                      <div className="flex w-full rounded-lg pt-1">
                        <div className="relative w-full">
                          <input
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <label
                          className="text-sm font-medium text-gray-900"
                          data-testid="flowbite-label"
                          htmlFor="password"
                        >
                          Contraseña
                        </label>
                      </div>
                      <div className="flex w-full rounded-lg pt-1">
                        <div className="relative w-full">
                          <input
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                            id="password"
                            type="password"
                            placeholder="contraseña"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>
                      <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
                        ¿Olvidaste tu contraseña?
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
                      >
                        <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false cursor-pointer">
                          {loading ? "Cargando..." : "Iniciar Sesión"}
                        </span>
                      </button>
                      <button
                        type="button"
                        disabled={loading}
                        className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
                      >
                        <span className="flex items-center justify-center gap-2 font-medium py-1 px-2.5 text-base false">
                          <FaGoogle />
                          Iniciar Sesión con Google
                        </span>
                      </button>
                      <button
                        type="button"
                        disabled={loading}
                        className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
                      >
                        <span className="flex items-center justify-center gap-2 font-medium py-1 px-2.5 text-base false">
                          <FaFacebook />
                          Iniciar Sesión con Facebook
                        </span>
                      </button>
                    </div>
                  </form>
                  {formError && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      {formError}
                    </div>
                  )}
                  <div className="min-w-[270px]">
                    <div className="mt-4 text-center">
                      ¿Nuevo usuario?
                      <Link
                        className="text-blue-500 underline hover:text-blue-600"
                        to="/register"
                      >
                        {" "}Crea una cuenta aqui
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
