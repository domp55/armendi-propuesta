import { useState } from "react";
import Header from "../components/Header";
import "../styles/InventoryStyle.css";
import {
    FiBox,
    FiHardDrive,
    FiTool,
    FiDroplet,
    FiShield,
    FiSearch,
    FiFilter,
} from "react-icons/fi";

const categories = [
    { id: "all", name: "Todos", icon: FiBox },
    { id: "safety", name: "Seguridad", icon: FiShield },
    { id: "tools", name: "Herramientas", icon: FiTool },
    { id: "equipment", name: "Equipos", icon: FiHardDrive },
    { id: "fuel", name: "Combustibles", icon: FiDroplet },
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
];

function getStatus(quantity, minStock) {
    if (quantity === 0) return { label: "Agotado", class: "depleted" };
    if (quantity < minStock) return { label: "Bajo Stock", class: "low" };
    return { label: "Disponible", class: "available" };
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
