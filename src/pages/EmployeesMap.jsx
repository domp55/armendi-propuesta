import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/biometric/EmployeesMapStyle.css";

import mineIconImg from "../img/mina.png"; // tu logo de mina
import Header from "../components/Header";

const mineIcon = new L.Icon({
  iconUrl: mineIconImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

/* 🔹 Datos mock */
const mines = [
  {
    id: 1,
    name: "Mina San José",
    position: [-3.8318778037379952, -78.74328816223178],
    present: 18,
    absent: 2,
  },
  {
    id: 2,
    name: "Mina El Dorado",
    position: [-4.1, -78.74328816223178],
    present: 25,
    absent: 5,
  },
  {
    id: 3,
    name: "Mina La Esperanza",
    position: [-4.0318778037379952, -78.74328816223178],
    present: 12,
    absent: 3,
  },
];

export default function EmployeesMap() {
  return (<div>
              <Header />
              <div className="page-container">
                  <main className="main-content">
    <div className="map-page">

      <MapContainer
        center={[-4.0318778037379952, -78.74328816223178]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mines.map((mine) => (
          <Marker key={mine.id} position={mine.position} icon={mineIcon}>
            <Popup>
              <div className="mine-popup">
                <h4>{mine.name}</h4>
                <p><strong>Presentes:</strong> {mine.present}</p>
                <p><strong>Ausentes:</strong> {mine.absent}</p>
                <p><strong>Total:</strong> {mine.present + mine.absent}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>

                    </main>
                </div>
            </div>
  );
}
