import { useState } from "react";
import Header from "../components/Header";
import "../styles/InventoryStyle.css";
import "../styles/FuelMonitoringStyle.css";
import {
    FiBox,
    FiHardDrive,
    FiTool,
    FiDroplet,
    FiShield,
    FiSearch,
    FiFilter,
    FiTruck,
    FiPackage,
    FiActivity,
    FiTrendingUp,
    FiTrendingDown,
    FiPlus,
    FiMinus,
} from "react-icons/fi";

const categories = [
    { id: "all", name: "Todos", icon: FiBox },
    { id: "safety", name: "Seguridad", icon: FiShield },
    { id: "tools", name: "Herramientas", icon: FiTool },
    { id: "equipment", name: "Equipos", icon: FiHardDrive },
    { id: "fuel", name: "Combustibles", icon: FiDroplet },
    { id: "machinery", name: "Maquinaria", icon: FiTruck },
    { id: "spares", name: "Repuestos", icon: FiPackage },
];

const inventoryData = [
    { id: "INV-001", name: "Cascos de Seguridad", category: "safety", quantity: 12, minStock: 50, unit: "unidades", sector: "Almacén Central", lastUpdate: "2026-01-12" },
    { id: "INV-002", name: "Guantes de Trabajo", category: "safety", quantity: 230, minStock: 100, unit: "pares", sector: "Almacén Central", lastUpdate: "2026-01-11" },
    { id: "INV-003", name: "Botas de Seguridad", category: "safety", quantity: 45, minStock: 40, unit: "pares", sector: "Almacén Central", lastUpdate: "2026-01-10" },
    { id: "INV-004", name: "Gafas Protectoras", category: "safety", quantity: 0, minStock: 80, unit: "unidades", sector: "Almacén Central", lastUpdate: "2026-01-09" },
    { id: "INV-005", name: "Chalecos Reflectivos", category: "safety", quantity: 156, minStock: 100, unit: "unidades", sector: "Almacén Central", lastUpdate: "2026-01-12" },
    { id: "INV-006", name: "Picos de Minería", category: "tools", quantity: 89, minStock: 50, unit: "unidades", sector: "Sector A", lastUpdate: "2026-01-11" },
    { id: "INV-007", name: "Palas Industriales", category: "tools", quantity: 67, minStock: 40, unit: "unidades", sector: "Sector A", lastUpdate: "2026-01-10" },
    { id: "INV-008", name: "Martillos Neumáticos", category: "tools", quantity: 23, minStock: 20, unit: "unidades", sector: "Sector B", lastUpdate: "2026-01-12" },
    { id: "INV-009", name: "Taladros Perforadores", category: "tools", quantity: 8, minStock: 15, unit: "unidades", sector: "Sector B", lastUpdate: "2026-01-08" },
    { id: "INV-010", name: "Linternas de Cabeza", category: "equipment", quantity: 342, minStock: 200, unit: "unidades", sector: "Almacén Central", lastUpdate: "2026-01-12" },
    { id: "INV-011", name: "Radios de Comunicación", category: "equipment", quantity: 78, minStock: 50, unit: "unidades", sector: "Almacén Central", lastUpdate: "2026-01-11" },
    { id: "INV-012", name: "Detectores de Gas", category: "equipment", quantity: 34, minStock: 30, unit: "unidades", sector: "Seguridad", lastUpdate: "2026-01-10" },
    { id: "INV-013", name: "Ventiladores Industriales", category: "equipment", quantity: 12, minStock: 10, unit: "unidades", sector: "Mantenimiento", lastUpdate: "2026-01-09" },
    { id: "INV-014", name: "Diésel", category: "fuel", quantity: 8500, minStock: 5000, unit: "litros", sector: "Combustibles", lastUpdate: "2026-01-12" },
    { id: "INV-015", name: "Gasolina", category: "fuel", quantity: 2300, minStock: 2000, unit: "litros", sector: "Combustibles", lastUpdate: "2026-01-12" },
    { id: "INV-016", name: "Aceite Hidráulico", category: "fuel", quantity: 450, minStock: 500, unit: "litros", sector: "Mantenimiento", lastUpdate: "2026-01-11" },
    { id: "INV-017", name: "Grasa Industrial", category: "fuel", quantity: 120, minStock: 100, unit: "kg", sector: "Mantenimiento", lastUpdate: "2026-01-10" },
    // Maquinaria
    { id: "INV-018", name: "Excavadora CAT 390F", category: "machinery", quantity: 3, minStock: 2, unit: "unidades", sector: "Sector A", lastUpdate: "2026-01-12" },
    { id: "INV-019", name: "Camión Volquete Komatsu HD785", category: "machinery", quantity: 5, minStock: 3, unit: "unidades", sector: "Sector B", lastUpdate: "2026-01-11" },
    { id: "INV-020", name: "Perforadora Atlas Copco", category: "machinery", quantity: 2, minStock: 2, unit: "unidades", sector: "Sector C", lastUpdate: "2026-01-10" },
    { id: "INV-021", name: "Cargador Frontal CAT 988K", category: "machinery", quantity: 2, minStock: 1, unit: "unidades", sector: "Sector A", lastUpdate: "2026-01-09" },
    { id: "INV-022", name: "Bulldozer CAT D11", category: "machinery", quantity: 1, minStock: 1, unit: "unidades", sector: "Sector A", lastUpdate: "2026-01-08" },
    // Repuestos
    { id: "INV-023", name: "Filtros de Aceite CAT", category: "spares", quantity: 45, minStock: 30, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-12" },
    { id: "INV-024", name: "Mangueras Hidráulicas", category: "spares", quantity: 28, minStock: 20, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-11" },
    { id: "INV-025", name: "Correas de Transmisión", category: "spares", quantity: 15, minStock: 25, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-10" },
    { id: "INV-026", name: "Rodamientos Industriales", category: "spares", quantity: 60, minStock: 40, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-09" },
    { id: "INV-027", name: "Bujías de Encendido", category: "spares", quantity: 120, minStock: 100, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-12" },
    { id: "INV-028", name: "Pastillas de Freno", category: "spares", quantity: 8, minStock: 15, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-08" },
    { id: "INV-029", name: "Neumáticos 20.5R25", category: "spares", quantity: 12, minStock: 8, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-11" },
    { id: "INV-030", name: "Kit de Empaques", category: "spares", quantity: 35, minStock: 25, unit: "unidades", sector: "Almacén Repuestos", lastUpdate: "2026-01-10" },
];

function getStatus(quantity, minStock) {
    if (quantity === 0) return { label: "Agotado", class: "depleted" };
    if (quantity < minStock) return { label: "Bajo Stock", class: "low" };
    return { label: "Disponible", class: "available" };
}

// Fuel Tank Data for Monitoring
const fuelTanks = [
    { id: "TK-001", name: "Tanque Diésel Principal", type: "diesel", currentLevel: 8500, capacity: 15000, unit: "litros", location: "Estación Central", dailyConsumption: 450, lastRefill: "2026-01-10" },
    { id: "TK-002", name: "Tanque Gasolina", type: "gasoline", currentLevel: 2300, capacity: 5000, unit: "litros", location: "Estación Central", dailyConsumption: 180, lastRefill: "2026-01-08" },
    { id: "TK-003", name: "Reserva Aceite Hidráulico", type: "hydraulic", currentLevel: 450, capacity: 1000, unit: "litros", location: "Taller Mecánico", dailyConsumption: 25, lastRefill: "2026-01-05" },
    { id: "TK-004", name: "Depósito Grasa Industrial", type: "grease", currentLevel: 120, capacity: 200, unit: "kg", location: "Taller Mecánico", dailyConsumption: 8, lastRefill: "2026-01-03" },
];

const fuelActivity = [
    { id: 1, type: "supply", fuel: "Diésel", amount: 5000, unit: "litros", machine: null, operator: "Proveedor PetroSur", date: "2026-01-12 08:30" },
    { id: 2, type: "dispatch", fuel: "Diésel", amount: 320, unit: "litros", machine: "Excavadora CAT 390F", operator: "Carlos Mendoza", date: "2026-01-12 14:15" },
    { id: 3, type: "dispatch", fuel: "Gasolina", amount: 85, unit: "litros", machine: "Camioneta Toyota", operator: "Juan Pérez", date: "2026-01-12 11:45" },
    { id: 4, type: "dispatch", fuel: "Diésel", amount: 480, unit: "litros", machine: "Camión Volquete HD785", operator: "Roberto Sánchez", date: "2026-01-12 09:00" },
    { id: 5, type: "supply", fuel: "Aceite Hidráulico", amount: 200, unit: "litros", machine: null, operator: "Proveedor LubriMax", date: "2026-01-11 16:00" },
];

function getTankStatus(current, capacity) {
    const percentage = (current / capacity) * 100;
    if (percentage <= 20) return { label: "Crítico", class: "critical" };
    if (percentage <= 40) return { label: "Bajo", class: "warning" };
    return { label: "Óptimo", class: "optimal" };
}

function FuelMonitoringPanel() {
    const totalDieselConsumption = 12500;
    const totalGasolineConsumption = 3200;
    const dailyAverage = 630;
    const monthlyProjection = 18900;

    return (
        <div className="fuel-monitoring-section">
            <div className="fuel-monitoring-header">
                <h3><FiDroplet /> Control de Combustible</h3>
            </div>

            {/* Tank Level Cards */}
            <div className="fuel-tanks-grid">
                {fuelTanks.map((tank) => {
                    const percentage = Math.round((tank.currentLevel / tank.capacity) * 100);
                    const status = getTankStatus(tank.currentLevel, tank.capacity);
                    const daysRemaining = Math.floor(tank.currentLevel / tank.dailyConsumption);

                    return (
                        <div key={tank.id} className="fuel-tank-card">
                            <div className="tank-header">
                                <div className="tank-info">
                                    <h4>{tank.name}</h4>
                                    <span className="tank-location">{tank.location}</span>
                                </div>
                                <span className={`tank-status-badge ${status.class}`}>
                                    {status.label}
                                </span>
                            </div>

                            <div className="tank-level-container">
                                <div className="tank-level-bar">
                                    <div
                                        className={`tank-level-fill ${tank.type}`}
                                        style={{ width: `${percentage}%` }}
                                    >
                                        <span className="tank-level-text">{percentage}%</span>
                                    </div>
                                </div>
                                <div className="tank-level-details">
                                    <span className="current-level">
                                        {tank.currentLevel.toLocaleString()} {tank.unit}
                                    </span>
                                    <span>Capacidad: {tank.capacity.toLocaleString()} {tank.unit}</span>
                                </div>
                            </div>

                            <div className="tank-stats">
                                <div className="tank-stat">
                                    <div className="tank-stat-value">{tank.dailyConsumption}</div>
                                    <div className="tank-stat-label">{tank.unit}/día</div>
                                </div>
                                <div className="tank-stat">
                                    <div className="tank-stat-value">{daysRemaining}</div>
                                    <div className="tank-stat-label">Días restantes</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Consumption Summary */}
            <div className="fuel-consumption-summary">
                <div className="consumption-header">
                    <h4>Resumen de Consumo</h4>
                    <span className="consumption-period">Enero 2026</span>
                </div>
                <div className="consumption-stats">
                    <div className="consumption-stat-card">
                        <div className="consumption-stat-icon diesel">
                            <FiDroplet size={18} />
                        </div>
                        <div className="consumption-stat-value">{totalDieselConsumption.toLocaleString()} L</div>
                        <div className="consumption-stat-label">Diésel Consumido</div>
                        <div className="consumption-stat-trend up">
                            <FiTrendingUp size={12} /> +8% vs mes anterior
                        </div>
                    </div>
                    <div className="consumption-stat-card">
                        <div className="consumption-stat-icon gasoline">
                            <FiDroplet size={18} />
                        </div>
                        <div className="consumption-stat-value">{totalGasolineConsumption.toLocaleString()} L</div>
                        <div className="consumption-stat-label">Gasolina Consumida</div>
                        <div className="consumption-stat-trend down">
                            <FiTrendingDown size={12} /> -3% vs mes anterior
                        </div>
                    </div>
                    <div className="consumption-stat-card">
                        <div className="consumption-stat-icon daily">
                            <FiActivity size={18} />
                        </div>
                        <div className="consumption-stat-value">{dailyAverage} L</div>
                        <div className="consumption-stat-label">Promedio Diario</div>
                    </div>
                    <div className="consumption-stat-card">
                        <div className="consumption-stat-icon monthly">
                            <FiTrendingUp size={18} />
                        </div>
                        <div className="consumption-stat-value">{monthlyProjection.toLocaleString()} L</div>
                        <div className="consumption-stat-label">Proyección Mensual</div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="fuel-recent-activity">
                <div className="activity-header">
                    <h4>Actividad Reciente</h4>
                </div>
                <div className="activity-list">
                    {fuelActivity.map((activity) => (
                        <div key={activity.id} className="activity-item">
                            <div className={`activity-icon ${activity.type}`}>
                                {activity.type === "supply" ? <FiPlus size={16} /> : <FiMinus size={16} />}
                            </div>
                            <div className="activity-details">
                                <div className="activity-title">
                                    {activity.type === "supply"
                                        ? `Abastecimiento de ${activity.fuel}`
                                        : `Despacho a ${activity.machine}`
                                    }
                                </div>
                                <div className="activity-meta">
                                    {activity.operator} • {activity.date}
                                </div>
                            </div>
                            <div className={`activity-amount ${activity.type === "supply" ? "positive" : "negative"}`}>
                                {activity.type === "supply" ? "+" : "-"}{activity.amount.toLocaleString()} {activity.unit}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Inventory() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = inventoryData.filter((item) => {
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const stats = {
        total: inventoryData.length,
        available: inventoryData.filter((i) => i.quantity >= i.minStock).length,
        low: inventoryData.filter((i) => i.quantity > 0 && i.quantity < i.minStock).length,
        depleted: inventoryData.filter((i) => i.quantity === 0).length,
    };

    return (
        <div>
            <Header />
            <div className="inventory-container">
                {/* Sidebar */}
                <aside className="inventory-sidebar">
                    <div className="sidebar-header">
                        <FiBox />
                        <span>Inventario</span>
                    </div>
                    <div className="sidebar-menu">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className={`sidebar-item ${selectedCategory === cat.id ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                <cat.icon size={18} />
                                <span>{cat.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="sidebar-stats">
                        <h4>Resumen</h4>
                        <div className="stat-row">
                            <span>Total de Items</span>
                            <span className="stat-value">{stats.total}</span>
                        </div>
                        <div className="stat-row">
                            <span>Disponibles</span>
                            <span className="stat-value available">{stats.available}</span>
                        </div>
                        <div className="stat-row">
                            <span>Bajo Stock</span>
                            <span className="stat-value low">{stats.low}</span>
                        </div>
                        <div className="stat-row">
                            <span>Agotados</span>
                            <span className="stat-value depleted">{stats.depleted}</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="inventory-main">
                    <div className="inventory-header">
                        <h2>Gestión de Inventario</h2>
                        <div className="inventory-actions">
                            <div className="search-box">
                                <FiSearch />
                                <input
                                    type="text"
                                    placeholder="Buscar material..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="filter-btn">
                                <FiFilter /> Filtrar
                            </button>
                        </div>
                    </div>

                    {/* Fuel Monitoring Panel - shown when Combustibles is selected */}
                    {selectedCategory === "fuel" && <FuelMonitoringPanel />}

                    <div className="inventory-table-wrapper">
                        <table className="inventory-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Material</th>
                                    <th>Cantidad</th>
                                    <th>Estado</th>
                                    <th>Sector</th>
                                    <th>Última Actualización</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((item) => {
                                    const status = getStatus(item.quantity, item.minStock);
                                    return (
                                        <tr key={item.id}>
                                            <td className="id-cell">{item.id}</td>
                                            <td className="name-cell">{item.name}</td>
                                            <td className="quantity-cell">
                                                {item.quantity.toLocaleString()} {item.unit}
                                            </td>
                                            <td>
                                                <span className={`status-badge ${status.class}`}>
                                                    {status.label}
                                                </span>
                                            </td>
                                            <td className="sector-cell">{item.sector}</td>
                                            <td className="date-cell">{item.lastUpdate}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
