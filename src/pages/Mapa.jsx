import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/leaflet-fix.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix del ícono default de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Mapa = () => {
  const position = [-34.5955199, -58.375556];

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Visita nuestro local
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-out border border-amber-200">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "480px", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                  <Popup>
                    Lugar Random Tienda <br /> 1234 San Martin, Retiro, CABA.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* INFO A LA DERECHA */}
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Nuestra ubicacion
                </h3>
                <p className="mt-1 text-gray-600">
                  1234 San Martin, Retiro, CABA
                </p>
              </div>

              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Horarios</h3>
                <p className="mt-1 text-gray-600">Lunes - Viernes: 9am - 5pm</p>
                <p className="mt-1 text-gray-600">Sabado: 10am - 4pm</p>
                <p className="mt-1 text-gray-600">Domingo: Correado</p>
              </div>

              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Contacto</h3>
                <p className="mt-1 text-gray-600">
                  Correo Electronico: admin@example.com
                </p>
                <p className="mt-1 text-gray-600">Celular: 1132123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;
