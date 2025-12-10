import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";
import Spinner from "../assets/icons/Spinner";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerProductos = async () => {
    try {
      const res = await api.get("/products");
      setProductos(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar productos");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const manejarEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await api.delete(`/products/${id}`);
        toast.success("Producto eliminado correctamente");
        setProductos(productos.filter((p) => p.id !== id));
      } catch (error) {
        console.error(error);
        toast.error("Error al eliminar producto");
      }
    }
  };

  if (cargando) return <div className="flex justify-center mt-10"><Spinner /></div>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Administración de Productos</h1>
        <Link
          to="/admin/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center gap-2"
        >
          <FaPlus /> Nuevo Producto
        </Link>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        {/* Vista de Tabla para Escritorio */}
        <table className="w-full text-sm text-left text-gray-500 hidden md:table">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Imagen</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Precio</th>
              <th className="px-6 py-3">Categorías</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img src={producto.image} alt={producto.name} className="w-12 h-12 object-contain" />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{producto.name}</td>
                <td className="px-6 py-4">${producto.price}</td>
                <td className="px-6 py-4">
                  {producto.categories?.map((c) => c).join(", ")}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/admin/edit/${producto.id}`}
                      className="text-blue-600 hover:text-blue-900"
                      title="Editar"
                    >
                      <FaEdit size={18} />
                    </Link>
                    <button
                      onClick={() => manejarEliminar(producto.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Eliminar"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

         {/* Vista de Tarjetas para Móvil */}
         <div className="md:hidden flex flex-col gap-4 p-4">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex gap-4">
              <img
                src={producto.image}
                alt={producto.name}
                className="w-20 h-20 object-contain rounded-md"
              />
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{producto.name}</h3>
                  <p className="text-gray-600 font-bold">${producto.price}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                    {producto.categories?.map((c) => c).join(", ")}
                  </p>
                </div>
                <div className="flex gap-4 mt-3 self-end">
                   <Link
                      to={`/admin/edit/${producto.id}`}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-semibold"
                    >
                      <FaEdit /> Editar
                    </Link>
                    <button
                      onClick={() => manejarEliminar(producto.id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm font-semibold"
                    >
                      <FaTrash /> Eliminar
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admin;
