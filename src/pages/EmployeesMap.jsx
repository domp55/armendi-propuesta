import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/biometric/EmployeesMapStyle.css";

import mineIconImg from "../img/mina.png";
import Header from "../components/Header";

const mineIcon = new L.Icon({
  iconUrl: mineIconImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

/* 🔹 Datos mock enriquecidos */
const mines = [
  {
    id: 1,
    name: "Sector A - Extracción Principal",
    position: [-3.8318778037379952, -78.74328816223178],
    present: 85,
    absent: 5,
    supervisor: "Carlos Mendoza",
    machinery: { active: 6, repair: 1 },
    production: "2,450 ton/día",
    alerts: 1,
    status: "Operativo",
  },
  {
    id: 2,
    name: "Sector B - Transporte",
    position: [-3.87, -78.72],
    present: 62,
    absent: 3,
    supervisor: "Juan Pérez",
    machinery: { active: 8, repair: 0 },
    production: "N/A",
    alerts: 0,
    status: "Operativo",
  },
  {
    id: 3,
    name: "Sector C - Perforación",
    position: [-3.79, -78.76],
    present: 45,
    absent: 2,
    supervisor: "Miguel Rodríguez",
    machinery: { active: 4, repair: 2 },
    production: "1,200 ton/día",
    alerts: 2,
    status: "Alerta",
  },
  {
    id: 4,
    name: "Planta Procesadora",
    position: [-3.85, -78.70],
    present: 78,
    absent: 4,
    supervisor: "Ana Martínez",
    machinery: { active: 3, repair: 0 },
    production: "5,000 ton/día",
    alerts: 0,
    status: "Operativo",
  },
  {
    id: 5,
    name: "Sector D - Caminos",
    position: [-3.82, -78.78],
    present: 28,
    absent: 2,
    supervisor: "Antonio García",
    machinery: { active: 2, repair: 0 },
    production: "N/A",
    alerts: 0,
    status: "Operativo",
  },
  {
    id: 6,
    name: "Almacén Central",
    position: [-3.84, -78.73],
    present: 15,
    absent: 0,
    supervisor: "Roberto Sánchez",
    machinery: { active: 1, repair: 0 },
    production: "N/A",
    alerts: 1,
    status: "Operativo",
  },
];

export default function EmployeesMap() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <main className="main-content">
          {/* Stats Bar */}
          <div className="map-stats-bar">
            <div className="map-stat">
              <span className="stat-value">6</span>
              <span className="stat-label">Sectores Activos</span>
            </div>
            <div className="map-stat">
              <span className="stat-value">313</span>
              <span className="stat-label">Personal en Campo</span>
            </div>
            <div className="map-stat">
              <span className="stat-value">24</span>
              <span className="stat-label">Maquinaria Operando</span>
            </div>
            <div className="map-stat alert">
              <span className="stat-value">4</span>
              <span className="stat-label">Alertas Activas</span>
            </div>
          </div>

          <div className="map-page">
            <MapContainer
              center={[-3.84, -78.74]}
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
                      <div className={`popup-status ${mine.status === "Alerta" ? "alert" : "ok"}`}>
                        {mine.status}
                      </div>

                      <div className="popup-section">
                        <strong>👷 Personal</strong>
                        <p>Presentes: <span className="present">{mine.present}</span></p>
                        <p>Ausentes: <span className="absent">{mine.absent}</span></p>
                        <p>Supervisor: {mine.supervisor}</p>
                      </div>

                      <div className="popup-section">
                        <strong>🚜 Maquinaria</strong>
                        <p>Activa: <span className="active">{mine.machinery.active}</span></p>
                        <p>En reparación: <span className="repair">{mine.machinery.repair}</span></p>
                      </div>

                      <div className="popup-section">
                        <strong>📊 Producción</strong>
                        <p>{mine.production}</p>
                      </div>

                      {mine.alerts > 0 && (
                        <div className="popup-alerts">
                          ⚠️ {mine.alerts} alerta(s) activa(s)
                        </div>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Legend */}
          <div className="map-legend">
            <span className="legend-item">
              <span className="dot green"></span> Operativo
            </span>
            <span className="legend-item">
              <span className="dot yellow"></span> Alerta
            </span>
            <span className="legend-item">
              <span className="dot red"></span> Inactivo
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
