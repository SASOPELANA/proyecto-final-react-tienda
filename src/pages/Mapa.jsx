import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/leaflet-fix.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { Link } from "react-router-dom";

// Este bloque sirve para que los íconos default se vean bien
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Mapa = () => {
  const position = [-34.5955199, -58.375556];

  return (
    <div>
      <h1 className="flex justify-center my-8 font-bold text-3xl text-pretty text-gray-800 max-sm:text-xl">
        Lugar Random Tienda
      </h1>
      <h2 className="flex justify-center my-8 font-bold text-4xl text-pretty text-gray-800 max-sm:text-xl">
        Podes encontrarnos aqui:
      </h2>
      <div className="mx-32 mt-16 -z-auto max-sm:mx-4 border border-amber-200 rounded-lg">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "70vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Link to="/" className="flex justify-center my-8 font-bold">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer">
          Volver al Inicio{" "}
        </button>
      </Link>
    </div>
  );
};

export default Mapa;
