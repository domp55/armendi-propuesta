import { useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Header from "../components/Header";
import "../styles/ReportsStyle.css";
import {
    FiUsers,
    FiBox,
    FiTruck,
    FiDollarSign,
    FiDownload,
    FiCalendar,
} from "react-icons/fi";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const tabs = [
    { id: "personnel", label: "Personal", icon: FiUsers },
    { id: "inventory", label: "Inventario", icon: FiBox },
    { id: "machinery", label: "Maquinaria", icon: FiTruck },
    { id: "expenses", label: "Gastos", icon: FiDollarSign },
];

// Personnel Data
const personnelData = {
    monthly: {
        labels: ["Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Ene"],
        datasets: [
            {
                label: "Asistencia Promedio %",
                data: [92, 94, 91, 95, 93, 89, 94],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
                borderRadius: 6,
            },
        ],
    },
    summary: [
        { label: "Total Empleados", value: "500" },
        { label: "Activos", value: "487" },
        { label: "En Licencia", value: "8" },
        { label: "Despedidos (año)", value: "12" },
        { label: "Nuevos (mes)", value: "5" },
        { label: "Asistencia Promedio", value: "93.2%" },
    ],
};

// Inventory Data
const inventoryData = {
    categories: {
        labels: ["Seguridad", "Herramientas", "Equipos", "Combustibles"],
        datasets: [
            {
                data: [35, 25, 22, 18],
                backgroundColor: ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"],
            },
        ],
    },
    summary: [
        { label: "Total Items", value: "17" },
        { label: "Disponibles", value: "12" },
        { label: "Bajo Stock", value: "4" },
        { label: "Agotados", value: "1" },
        { label: "Valor Total Est.", value: "$2.4M" },
        { label: "Órdenes Pendientes", value: "3" },
    ],
};

// Machinery Data
const machineryData = {
    usage: {
        labels: ["Excavadoras", "Camiones", "Perforadoras", "Cargadores", "Otros"],
        datasets: [
            {
                label: "Horas de Uso (mes)",
                data: [1200, 1800, 650, 980, 540],
                backgroundColor: [
                    "rgba(59, 130, 246, 0.7)",
                    "rgba(16, 185, 129, 0.7)",
                    "rgba(245, 158, 11, 0.7)",
                    "rgba(139, 92, 246, 0.7)",
                    "rgba(236, 72, 153, 0.7)",
                ],
                borderRadius: 6,
            },
        ],
    },
    summary: [
        { label: "Total Maquinaria", value: "22" },
        { label: "Operativas", value: "18" },
        { label: "En Reparación", value: "4" },
        { label: "Horas Totales (mes)", value: "5,170" },
        { label: "Mant. Programados", value: "6" },
        { label: "Eficiencia", value: "81.8%" },
    ],
};

// Expenses Data
const expensesData = {
    monthly: {
        labels: ["Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Ene"],
        datasets: [
            {
                label: "Gastos (miles $)",
                data: [850, 920, 780, 890, 950, 1100, 870],
                borderColor: "#ef4444",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                fill: true,
                tension: 0.4,
            },
        ],
    },
    summary: [
        { label: "Gasto Mes Actual", value: "$870,000" },
        { label: "Presupuesto", value: "$950,000" },
        { label: "Diferencia", value: "+$80,000" },
        { label: "Personal", value: "$520,000" },
        { label: "Combustible", value: "$180,000" },
        { label: "Mantenimiento", value: "$95,000" },
    ],
};

export default function Reports() {
    const [activeTab, setActiveTab] = useState("personnel");

    const renderContent = () => {
        switch (activeTab) {
            case "personnel":
                return (
                    <div className="report-content">
                        <div className="chart-section">
                            <h3>Asistencia Mensual</h3>
                            <div className="chart-wrapper">
                                <Bar
                                    data={personnelData.monthly}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { display: false } },
                                        scales: { y: { beginAtZero: false, min: 80, max: 100 } },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="summary-section">
                            <h3>Resumen de Personal</h3>
                            <div className="summary-grid">
                                {personnelData.summary.map((item, i) => (
                                    <div key={i} className="summary-item">
                                        <span className="summary-label">{item.label}</span>
                                        <span className="summary-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case "inventory":
                return (
                    <div className="report-content">
                        <div className="chart-section">
                            <h3>Distribución por Categoría</h3>
                            <div className="chart-wrapper doughnut">
                                <Doughnut
                                    data={inventoryData.categories}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { position: "right" } },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="summary-section">
                            <h3>Resumen de Inventario</h3>
                            <div className="summary-grid">
                                {inventoryData.summary.map((item, i) => (
                                    <div key={i} className="summary-item">
                                        <span className="summary-label">{item.label}</span>
                                        <span className="summary-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case "machinery":
                return (
                    <div className="report-content">
                        <div className="chart-section">
                            <h3>Horas de Uso por Tipo</h3>
                            <div className="chart-wrapper">
                                <Bar
                                    data={machineryData.usage}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { display: false } },
                                        indexAxis: "y",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="summary-section">
                            <h3>Resumen de Maquinaria</h3>
                            <div className="summary-grid">
                                {machineryData.summary.map((item, i) => (
                                    <div key={i} className="summary-item">
                                        <span className="summary-label">{item.label}</span>
                                        <span className="summary-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case "expenses":
                return (
                    <div className="report-content">
                        <div className="chart-section">
                            <h3>Gastos Mensuales</h3>
                            <div className="chart-wrapper">
                                <Line
                                    data={expensesData.monthly}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { display: false } },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="summary-section">
                            <h3>Resumen de Gastos</h3>
                            <div className="summary-grid">
                                {expensesData.summary.map((item, i) => (
                                    <div key={i} className="summary-item">
                                        <span className="summary-label">{item.label}</span>
                                        <span className="summary-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <Header />
            <div className="reports-container">
                <div className="reports-header">
                    <div>
                        <h1>Centro de Reportes</h1>
                        <p className="reports-subtitle">
                            Análisis y métricas del sistema de gestión minera
                        </p>
                    </div>
                    <div className="reports-actions">
                        <button className="action-btn">
                            <FiCalendar /> Enero 2026
                        </button>
                        <button className="action-btn primary">
                            <FiDownload /> Exportar
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="reports-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <tab.icon size={18} />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="reports-body">{renderContent()}</div>
            </div>
        </div>
    );
}
