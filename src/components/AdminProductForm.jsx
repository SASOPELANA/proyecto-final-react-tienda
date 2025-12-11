import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";
import Spinner from "../assets/icons/Spinner";
import SnniperColor from '../assets/icons/SnniperColor';

const AdminProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const esModoEdicion = !!id;

  const [datosFormulario, setDatosFormulario] = useState({
    name: "",
    price: "",
    description: "",
    categories: "",
    image: "",
  });

  const [cargando, setCargando] = useState(false);
  const [cargandoProducto, setCargandoProducto] = useState(esModoEdicion);

  useEffect(() => {
    if (esModoEdicion) {
      const obtenerProducto = async () => {
        try {
          const res = await api.get(`/products/${id}`);
          const producto = res.data;
          setDatosFormulario({
            name: producto.name,
            price: producto.price,
            description: producto.description,
            categories: producto.categories?.join(", ") || "",
            image: producto.image,
          });
        } catch (error) {
          console.error(error);
          toast.error("Error al cargar producto");
          navigate("/admin");
        } finally {
          setCargandoProducto(false);
        }
      };
      obtenerProducto();
    }
  }, [id, esModoEdicion, navigate]);

  const manejarCambio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = async (envio) => {
    envio.preventDefault();
    setCargando(true);

    const datosEnviar = {
      ...datosFormulario,
      price: Number(datosFormulario.price),
      categories: datosFormulario.categories.split(",").map((c) => c.trim()),
    };

    try {
      if (esModoEdicion) {
        await api.put(`/products/${id}`, datosEnviar);
        toast.success("Producto actualizado correctamente");
      } else {
        await api.post("/products", datosEnviar);
        toast.success("Producto creado correctamente");
      }
      navigate("/admin");
    } catch (error) {
      console.error(error);
      const resError = error.response?.data?.message || "Error al guardar producto";
      toast.error(resError);
    } finally {
      setCargando(false);
    }
  };

  if (cargandoProducto) return <div className="flex justify-center mt-10"><Spinner /></div>;

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {esModoEdicion ? "Editar Producto" : "Crear Nuevo Producto"}
      </h1>

      <form onSubmit={manejarEnvio} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={datosFormulario.name}
            onChange={manejarCambio}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Precio</label>
          <input
            type="number"
            name="price"
            value={datosFormulario.price}
            onChange={manejarCambio}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
            min="0"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Categorías (separadas por coma)</label>
          <input
            type="text"
            name="categories"
            value={datosFormulario.categories}
            onChange={manejarCambio}
            placeholder="Ej: Gamer, Consola, Oferta"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">URL de Imagen</label>
          <input
            type="url"
            name="image"
            value={datosFormulario.image}
            onChange={manejarCambio}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          {datosFormulario.image && (
            <img src={datosFormulario.image} alt="Vista previa" className="w-32 h-32 object-contain mt-2 border rounded" />
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Descripción</label>
          <textarea
            name="description"
            value={datosFormulario.description}
            onChange={manejarCambio}
            rows="4"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={cargando}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {cargando ? <SnniperColor /> : esModoEdicion ? "Actualizar Producto" : "Crear Producto"}
        </button>
      </form>
    </section>
  );
};

export default AdminProductForm;
