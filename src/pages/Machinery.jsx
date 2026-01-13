import { useState } from "react";
import Header from "../components/Header";
import "../styles/MachineryStyle.css";
import {
    FiTruck,
    FiSettings,
    FiUser,
    FiMapPin,
    FiClock,
    FiFilter,
} from "react-icons/fi";

const machineryData = [
    { id: "MAQ-001", name: "Excavadora CAT 390F", type: "Excavadora", status: "active", sector: "Sector A - Extracción", operator: "Carlos Mendoza", lastMaintenance: "2026-01-05", hoursUsed: 2340 },
    { id: "MAQ-002", name: "Camión Volquete Komatsu HD785", type: "Camión", status: "active", sector: "Sector B - Transporte", operator: "Juan Pérez", lastMaintenance: "2026-01-08", hoursUsed: 4520 },
    { id: "MAQ-003", name: "Excavadora CAT 374F", type: "Excavadora", status: "repair", sector: "Mantenimiento", operator: "Sin asignar", lastMaintenance: "2025-12-20", hoursUsed: 3100 },
    { id: "MAQ-004", name: "Perforadora Atlas Copco", type: "Perforadora", status: "active", sector: "Sector C - Perforación", operator: "Miguel Rodríguez", lastMaintenance: "2026-01-10", hoursUsed: 1890 },
    { id: "MAQ-005", name: "Cargador Frontal CAT 988K", type: "Cargador", status: "active", sector: "Sector A - Extracción", operator: "Roberto Sánchez", lastMaintenance: "2026-01-03", hoursUsed: 2780 },
    { id: "MAQ-006", name: "Camión Volquete CAT 797F", type: "Camión", status: "active", sector: "Sector B - Transporte", operator: "Fernando López", lastMaintenance: "2026-01-07", hoursUsed: 5120 },
    { id: "MAQ-007", name: "Camión Volquete Komatsu HD465", type: "Camión", status: "repair", sector: "Mantenimiento", operator: "Sin asignar", lastMaintenance: "2025-12-15", hoursUsed: 6200 },
    { id: "MAQ-008", name: "Bulldozer CAT D11", type: "Bulldozer", status: "active", sector: "Sector A - Extracción", operator: "Diego Martínez", lastMaintenance: "2026-01-09", hoursUsed: 3450 },
    { id: "MAQ-009", name: "Grúa Liebherr LTM 1500", type: "Grúa", status: "inactive", sector: "Almacén", operator: "Sin asignar", lastMaintenance: "2025-11-20", hoursUsed: 1200 },
    { id: "MAQ-010", name: "Motoniveladora CAT 16M3", type: "Motoniveladora", status: "active", sector: "Sector D - Caminos", operator: "Antonio García", lastMaintenance: "2026-01-06", hoursUsed: 2100 },
    { id: "MAQ-011", name: "Compactador CAT CS56B", type: "Compactador", status: "active", sector: "Sector D - Caminos", operator: "Luis Hernández", lastMaintenance: "2026-01-04", hoursUsed: 1560 },
    { id: "MAQ-012", name: "Excavadora Hitachi EX8000", type: "Excavadora", status: "active", sector: "Sector C - Perforación", operator: "Pedro Castro", lastMaintenance: "2026-01-11", hoursUsed: 4200 },
    { id: "MAQ-013", name: "Perforadora Sandvik DR461i", type: "Perforadora", status: "repair", sector: "Mantenimiento", operator: "Sin asignar", lastMaintenance: "2025-12-28", hoursUsed: 2890 },
    { id: "MAQ-014", name: "Camión Cisterna", type: "Camión", status: "active", sector: "Sector B - Transporte", operator: "Andrés Flores", lastMaintenance: "2026-01-02", hoursUsed: 1780 },
    { id: "MAQ-015", name: "Cargador Komatsu WA900", type: "Cargador", status: "active", sector: "Sector A - Extracción", operator: "Ricardo Díaz", lastMaintenance: "2026-01-08", hoursUsed: 3650 },
    { id: "MAQ-016", name: "Retroexcavadora JCB 4CX", type: "Retroexcavadora", status: "active", sector: "Sector E - Auxiliar", operator: "Jorge Morales", lastMaintenance: "2026-01-10", hoursUsed: 980 },
    { id: "MAQ-017", name: "Camión Grúa Hiab", type: "Camión", status: "active", sector: "Mantenimiento", operator: "Eduardo Vargas", lastMaintenance: "2026-01-05", hoursUsed: 2340 },
    { id: "MAQ-018", name: "Bulldozer Komatsu D475A", type: "Bulldozer", status: "repair", sector: "Mantenimiento", operator: "Sin asignar", lastMaintenance: "2025-12-22", hoursUsed: 4800 },
    { id: "MAQ-019", name: "Excavadora CAT 352", type: "Excavadora", status: "active", sector: "Sector B - Transporte", operator: "Mario Ruiz", lastMaintenance: "2026-01-09", hoursUsed: 1450 },
    { id: "MAQ-020", name: "Generador Caterpillar XQ2000", type: "Generador", status: "active", sector: "Planta de Energía", operator: "Técnico Eléctrico", lastMaintenance: "2026-01-12", hoursUsed: 8900 },
    { id: "MAQ-021", name: "Bomba de Agua Flygt", type: "Bomba", status: "active", sector: "Sector C - Perforación", operator: "Sistema Automático", lastMaintenance: "2026-01-07", hoursUsed: 5600 },
    { id: "MAQ-022", name: "Trituradora Metso HP500", type: "Trituradora", status: "active", sector: "Planta Procesadora", operator: "Equipo Procesamiento", lastMaintenance: "2026-01-11", hoursUsed: 7200 },
];

const statusLabels = {
    active: { label: "Activa", icon: "🟢" },
    repair: { label: "En Reparación", icon: "🟡" },
    inactive: { label: "Inactiva", icon: "🔴" },
};

const filters = [
    { id: "all", label: "Todas" },
    { id: "active", label: "Activas" },
    { id: "repair", label: "En Reparación" },
    { id: "inactive", label: "Inactivas" },
];

export default function Machinery() {
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredMachinery = machineryData.filter((m) =>
        statusFilter === "all" ? true : m.status === statusFilter
    );

    const stats = {
        total: machineryData.length,
        active: machineryData.filter((m) => m.status === "active").length,
        repair: machineryData.filter((m) => m.status === "repair").length,
        inactive: machineryData.filter((m) => m.status === "inactive").length,
    };

    return (
        <div>
            <Header />
            <div className="machinery-container">
                {/* Stats Bar */}
                <div className="machinery-stats-bar">
                    <div className="stat-item">
                        <span className="stat-number">{stats.total}</span>
                        <span className="stat-label">Total</span>
                    </div>
                    <div className="stat-item active">
                        <span className="stat-number">{stats.active}</span>
                        <span className="stat-label">Activas</span>
                    </div>
                    <div className="stat-item repair">
                        <span className="stat-number">{stats.repair}</span>
                        <span className="stat-label">En Reparación</span>
                    </div>
                    <div className="stat-item inactive">
                        <span className="stat-number">{stats.inactive}</span>
                        <span className="stat-label">Inactivas</span>
                    </div>
                </div>

                {/* Filters */}
                <div className="machinery-header">
                    <h2>Gestión de Maquinaria</h2>
                    <div className="filter-tabs">
                        {filters.map((f) => (
                            <button
                                key={f.id}
                                className={`filter-tab ${statusFilter === f.id ? "active" : ""}`}
                                onClick={() => setStatusFilter(f.id)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="machinery-grid">
                    {filteredMachinery.map((machine) => (
                        <div key={machine.id} className={`machinery-card ${machine.status}`}>
                            <div className="card-header">
                                <div className="machine-icon">
                                    <FiTruck size={24} />
                                </div>
                                <span className={`status-indicator ${machine.status}`}>
                                    {statusLabels[machine.status].icon} {statusLabels[machine.status].label}
                                </span>
                            </div>

                            <h3 className="machine-name">{machine.name}</h3>
                            <p className="machine-type">{machine.type}</p>
                            <span className="machine-id">{machine.id}</span>

                            <div className="card-details">
                                <div className="detail-row">
                                    <FiMapPin size={14} />
                                    <span>{machine.sector}</span>
                                </div>
                                <div className="detail-row">
                                    <FiUser size={14} />
                                    <span>{machine.operator}</span>
                                </div>
                                <div className="detail-row">
                                    <FiClock size={14} />
                                    <span>{machine.hoursUsed.toLocaleString()} hrs</span>
                                </div>
                                <div className="detail-row">
                                    <FiSettings size={14} />
                                    <span>Mant: {machine.lastMaintenance}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
