import EmployeeCard from "../biometricComponents/cards/EmployeeCard";
import AttendanceSummary from "../biometricComponents/fragments/AttendanceSummary";
import SidebarBiometric from "../biometricComponents/fragments/SidebarBiometric";
import Header from "../components/Header";
import "../styles/biometric/EmployeesStyle.css";
import { useEffect, useState } from "react";


export default function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const mockEmployees = [
            { id: "E001", name: "María González", position: "Gerente de Ventas" },
            { id: "E002", name: "Carlos Rodríguez", position: "Desarrollador" },
            { id: "E003", name: "Ana Martínez", position: "Diseñadora" },
            { id: "E004", name: "Juan Pérez", position: "Analista" },
            { id: "E005", name: "Laura Sánchez", position: "Marketing" },
            { id: "E006", name: "Pedro López", position: "Contador" },
            { id: "E007", name: "Sofia Torres", position: "RRHH" },
            { id: "E008", name: "Diego Ramírez", position: "Soporte Técnico" },
            { id: "E009", name: "Carmen Flores", position: "Administradora" },
            { id: "E010", name: "Miguel Ángel Díaz", position: "Supervisor" },
            { id: "E011", name: "Patricia Morales", position: "Asistente" },
            { id: "E012", name: "Roberto Castro", position: "Operador" },
            { id: "E013", name: "María Alba", position: "Gerente de Ventas" },
            { id: "E014", name: "Juan Rodríguez", position: "Desarrollador" },
            { id: "E015", name: "Pedro Martínez", position: "Diseñadora" },
            { id: "E016", name: "Matias Pérez", position: "Analista" },
            { id: "E017", name: "Antonio Sánchez", position: "Marketing" },
            { id: "E018", name: "Carlos López", position: "Contador" },
            { id: "E019", name: "Daniel Torres", position: "RRHH" },
            { id: "E020", name: "Diego Ramírez", position: "Soporte Técnico" },
        ];

        const employeesWithAttendance = mockEmployees.map(emp => ({
            ...emp,
            attendance: Math.random() < 0.9 ? 0 : 1  // 90% = 0 (presente), 10% = 1 (ausente)
        }));

        setEmployees(employeesWithAttendance);
    }, []);

    const presentCount = employees.filter(e => e.attendance === 0).length;
    const absentCount = employees.filter(e => e.attendance === 1).length;

    return (
        <div>
            <Header />
            <div className="page-container">
                <SidebarBiometric />
                    <main className="main-content">
                        <div className="diagnosis-history-wrapper">
                            <AttendanceSummary
                                presentCount={presentCount}
                                absentCount={absentCount}
                                totalCount={employees.length}
                            />
                            <div className="employees-grid">
                                {employees.map(employee => (
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