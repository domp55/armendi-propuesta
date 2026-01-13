import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import Header from "../components/Header";
import "../styles/DashboardStyle.css";
import {
    FiUsers,
    FiCheckCircle,
    FiTool,
    FiAlertTriangle,
    FiActivity,
    FiTruck,
    FiBox,
    FiDollarSign,
} from "react-icons/fi";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const kpiData = [
    {
        title: "Empleados Activos",
        value: "487",
        subtitle: "de 500 registrados",
        icon: FiUsers,
        color: "#3b82f6",
        bgColor: "#eff6ff",
    },
    {
        title: "Asistencia Hoy",
        value: "94.2%",
        subtitle: "458 presentes",
        icon: FiCheckCircle,
        color: "#10b981",
        bgColor: "#ecfdf5",
    },
    {
        title: "Maquinaria Operativa",
        value: "18/22",
        subtitle: "4 en mantenimiento",
        icon: FiTruck,
        color: "#f59e0b",
        bgColor: "#fffbeb",
    },
    {
        title: "Alertas Activas",
        value: "7",
        subtitle: "3 críticas",
        icon: FiAlertTriangle,
        color: "#ef4444",
        bgColor: "#fef2f2",
    },
];

const attendanceData = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [
        {
            label: "Asistencia %",
            data: [92, 95, 93, 96, 94, 88, 45],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            tension: 0.4,
        },
    ],
};

const areaDistribution = {
    labels: ["Extracción", "Procesamiento", "Transporte", "Mantenimiento", "Administración"],
    datasets: [
        {
            data: [180, 120, 85, 62, 40],
            backgroundColor: [
                "#3b82f6",
                "#10b981",
                "#f59e0b",
                "#8b5cf6",
                "#ec4899",
            ],
            borderWidth: 0,
        },
    ],
};

const alerts = [
    {
        type: "critical",
        message: "Excavadora #03 fuera de servicio - Motor dañado",
        time: "Hace 2 horas",
        area: "Mantenimiento",
    },
    {
        type: "warning",
        message: "Stock bajo de cascos de seguridad (12 unidades)",
        time: "Hace 4 horas",
        area: "Inventario",
    },
    {
        type: "warning",
        message: "3 empleados sin marcar entrada hoy",
        time: "Hace 5 horas",
        area: "RRHH",
    },
    {
        type: "info",
        message: "Mantenimiento programado Sector B - Mañana 6:00 AM",
        time: "Hace 6 horas",
        area: "Operaciones",
    },
    {
        type: "critical",
        message: "Camión volquete #07 reporta falla en frenos",
        time: "Hace 8 horas",
        area: "Seguridad",
    },
];

const recentActivity = [
    { action: "Juan Pérez registró entrada", time: "08:02 AM", icon: FiUsers },
    { action: "Camión #12 asignado a Sector C", time: "07:45 AM", icon: FiTruck },
    { action: "Orden de combustible #234 aprobada", time: "07:30 AM", icon: FiBox },
    { action: "Reporte de gastos mensual generado", time: "07:15 AM", icon: FiDollarSign },
    { action: "María López marcó salida anticipada", time: "07:00 AM", icon: FiActivity },
];

export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h1>Panel de Control</h1>
                    <p className="dashboard-subtitle">
                        Bienvenido al Sistema de Gestión Minera
                    </p>
                </div>

                {/* KPI Cards */}
                <div className="kpi-grid">
                    {kpiData.map((kpi, index) => (
                        <div key={index} className="kpi-card">
                            <div
                                className="kpi-icon"
                                style={{ backgroundColor: kpi.bgColor, color: kpi.color }}
                            >
                                <kpi.icon size={24} />
                            </div>
                            <div className="kpi-content">
                                <h3 className="kpi-value">{kpi.value}</h3>
                                <p className="kpi-title">{kpi.title}</p>
                                <span className="kpi-subtitle">{kpi.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="charts-row">
                    <div className="chart-card">
                        <h3 className="chart-title">Asistencia Semanal</h3>
                        <div className="chart-container">
                            <Line
                                data={attendanceData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: { legend: { display: false } },
                                    scales: {
                                        y: { beginAtZero: false, min: 40, max: 100 },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="chart-card">
                        <h3 className="chart-title">Distribución por Área</h3>
                        <div className="chart-container doughnut">
                            <Doughnut
                                data={areaDistribution}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { position: "right", labels: { boxWidth: 12 } },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Alerts & Activity */}
                <div className="bottom-row">
                    <div className="alerts-card">
                        <h3 className="section-title">
                            <FiAlertTriangle /> Alertas Recientes
                        </h3>
                        <div className="alerts-list">
                            {alerts.map((alert, index) => (
                                <div key={index} className={`alert-item ${alert.type}`}>
                                    <div className="alert-content">
                                        <p className="alert-message">{alert.message}</p>
                                        <div className="alert-meta">
                                            <span className="alert-area">{alert.area}</span>
                                            <span className="alert-time">{alert.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="activity-card">
                        <h3 className="section-title">
                            <FiActivity /> Actividad Reciente
                        </h3>
                        <div className="activity-list">
                            {recentActivity.map((item, index) => (
                                <div key={index} className="activity-item">
                                    <div className="activity-icon">
                                        <item.icon size={16} />
                                    </div>
                                    <div className="activity-content">
                                        <p className="activity-action">{item.action}</p>
                                        <span className="activity-time">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
