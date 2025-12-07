import { toast } from "react-toastify";

const Formulario = () => {
  const handleSubmit = (e) => {
    toast.success("Formulario enviado con éxito");
  };

  return (
    <div className="mx-2">
      <form
        className="max-w-md mx-auto my-20 p-6 bg-gray-300/85 rounded-lg shadow-md border-3 border-indigo-200"
        action="https://formsubmit.co/sopekof@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Contacto</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-bold text-gray-900"
          >
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 block w-full p-2.5"
            placeholder="Nombre y Apellido"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-900"
          >
            Correo Electronico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 block invalid:focus:ring-red-500 w-full p-2.5  peer"
            placeholder="nombre@company.com"
            required
          />
          <p className="text-red-500 hidden peer-[&:not(:placeholder-shown):invalid]:block mt-1 text-sm">
            Ingrese un correo electrónico válido.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Tu Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Ingrese su mensaje..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full text-black bg-indigo-400 hover:bg-indigo-300 hover:scale-105 transition focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
        >
          Enviar
        </button>

        <input type="hidden" name="_next" value="localhost:5173" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default Formulario;
