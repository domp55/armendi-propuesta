import EmployeeCard from "../biometricComponents/cards/EmployeeCard";
import AttendanceSummary from "../biometricComponents/fragments/AttendanceSummary";
import SidebarBiometric from "../biometricComponents/fragments/SidebarBiometric";
import Header from "../components/Header";
import "../styles/biometric/EmployeesStyle.css";
import { useEffect, useState } from "react";

// Nombres y apellidos para generar empleados
const firstNames = [
    "María", "Carlos", "Ana", "Juan", "Laura", "Pedro", "Sofía", "Diego",
    "Carmen", "Miguel", "Patricia", "Roberto", "Lucía", "Fernando", "Andrea",
    "José", "Gabriela", "Antonio", "Valentina", "Ricardo", "Isabella", "Alejandro",
    "Daniela", "Jorge", "Natalia", "Luis", "Camila", "Eduardo", "Paula", "Andrés"
];

const lastNames = [
    "González", "Rodríguez", "Martínez", "López", "Pérez", "García", "Sánchez",
    "Torres", "Ramírez", "Flores", "Díaz", "Morales", "Castro", "Vargas", "Ruiz",
    "Hernández", "Mendoza", "Rojas", "Ortiz", "Silva", "Campos", "Navarro", "Molina"
];

// Posiciones específicas de minería
const positions = [
    "Operador de Excavadora", "Operador de Camión", "Perforista",
    "Supervisor de Turno", "Ingeniero de Minas", "Técnico de Mantenimiento",
    "Operador de Cargador", "Geólogo", "Supervisor de Seguridad",
    "Mecánico de Maquinaria", "Electricista Industrial", "Operador de Trituradora",
    "Analista de Producción", "Jefe de Área", "Técnico de Explosivos",
    "Operador de Grúa", "Inspector de Calidad", "Técnico de Laboratorio",
    "Coordinador de Transporte", "Asistente Administrativo", "Almacenero",
    "Soldador Industrial", "Operador de Bomba", "Auxiliar de Mantenimiento"
];

const departments = ["Extracción", "Transporte", "Perforación", "Mantenimiento", "Planta", "Caminos", "Administración"];
const sectors = ["Sector A", "Sector B", "Sector C", "Sector D", "Planta Procesadora", "Almacén Central"];

// Generar empleados mock para la demo
function generateEmployees(count) {
    const employees = [];
    for (let i = 1; i <= count; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const position = positions[Math.floor(Math.random() * positions.length)];
        const department = departments[Math.floor(Math.random() * departments.length)];
        const sector = sectors[Math.floor(Math.random() * sectors.length)];

        // 5% de empleados despedidos
        const isFired = Math.random() < 0.05;

        employees.push({
            id: `E${String(i).padStart(3, '0')}`,
            name: `${firstName} ${lastName}`,
            position: position,
            department: department,
            sector: sector,
            attendance: isFired ? -1 : (Math.random() < 0.92 ? 0 : 1), // -1 = despedido, 0 = presente, 1 = ausente
            isFired: isFired,
            firedDate: isFired ? "2026-01-" + String(Math.floor(Math.random() * 12) + 1).padStart(2, '0') : null
        });
    }
    return employees;
}

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState({ type: "all", value: null });

    useEffect(() => {
        const generatedEmployees = generateEmployees(120);
        setEmployees(generatedEmployees);
    }, []);

    // Obtener listas únicas para los filtros
    const uniqueDepartments = [...new Set(employees.map(e => e.department))];
    const uniqueSectors = [...new Set(employees.map(e => e.sector))];
    const uniquePositions = [...new Set(employees.map(e => e.position))];

    // Aplicar filtros
    const filteredEmployees = employees.filter(emp => {
        // Primero filtramos por despedidos si es necesario
        if (filter.type === "fired") {
            return emp.isFired === true;
        }

        // Si no es filtro de despedidos, excluimos a los despedidos
        if (emp.isFired) return false;

        switch (filter.type) {
            case "all":
                return true;
            case "present":
                return emp.attendance === 0;
            case "absent":
                return emp.attendance === 1;
            case "department":
                return emp.department === filter.value;
            case "sector":
                return emp.sector === filter.value;
            case "position":
                return emp.position === filter.value;
            default:
                return true;
        }
    });

    // Estadísticas (excluyendo despedidos)
    const activeEmployees = employees.filter(e => !e.isFired);
    const presentCount = activeEmployees.filter(e => e.attendance === 0).length;
    const absentCount = activeEmployees.filter(e => e.attendance === 1).length;
    const firedCount = employees.filter(e => e.isFired).length;

    return (
        <div>
            <Header />
            <div className="page-container">
                <SidebarBiometric
                    onFilterChange={setFilter}
                    currentFilter={filter}
                    departments={uniqueDepartments}
                    sectors={uniqueSectors}
                    positions={uniquePositions}
                    firedCount={firedCount}
                />
                <main className="main-content">
                    <div className="diagnosis-history-wrapper">
                        <AttendanceSummary
                            presentCount={presentCount}
                            absentCount={absentCount}
                            totalCount={activeEmployees.length}
                        />

                        {/* Mostrar filtro activo */}
                        {filter.type !== "all" && (
                            <div className="active-filter-badge">
                                <span>
                                    Filtro: {filter.type === "fired" ? "Despedidos" :
                                        filter.type === "present" ? "Presentes" :
                                            filter.type === "absent" ? "Ausentes" :
                                                filter.value}
                                </span>
                                <button onClick={() => setFilter({ type: "all", value: null })}>✕</button>
                            </div>
                        )}

                        <div className="employees-count">
                            Mostrando {filteredEmployees.length} empleados
                        </div>

                        <div className="employees-grid">
                            {filteredEmployees.map(employee => (
                                <EmployeeCard
                                    key={employee.id}
                                    employee={employee}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}