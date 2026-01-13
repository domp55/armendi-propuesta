import "../../styles/biometric/EmployeeCardStyle.css";
import { FiEdit2 } from "react-icons/fi";

export default function EmployeeCard({ employee, onEdit }) {
    const isFired = employee.isFired;
    const isAbsent = employee.attendance === 1;

    let cardClass = "employee-card";
    if (isFired) {
        cardClass += " fired";
    } else if (isAbsent) {
        cardClass += " absent";
    } else {
        cardClass += " present";
    }

    return (
        <div className={cardClass}>
            <div className="employee-avatar">
                {employee.name.charAt(0)}
            </div>
            <div className="employee-details">
                <h3 className="employee-name">{employee.name}</h3>
                <p className="employee-position">{employee.position}</p>
                <p className="employee-meta">
                    <span className="employee-department">{employee.department}</span>
                    <span className="employee-sector">{employee.sector}</span>
                </p>
                <p className="employee-id">
                    ID: {employee.id}
                    {employee.biometricId && (
                        <span className="biometric-badge"> • {employee.biometricId}</span>
                    )}
                </p>
            </div>
            <div className="card-right">
                <div className="attendance-badge">
                    {isFired ? "DESPEDIDO" : isAbsent ? "AUSENTE" : "PRESENTE"}
                </div>
                {onEdit && !isFired && (
                    <button className="edit-btn" onClick={onEdit} title="Editar empleado">
                        <FiEdit2 size={14} />
                    </button>
                )}
            </div>
            {isFired && employee.firedDate && (
                <div className="fired-date">
                    Baja: {employee.firedDate}
                </div>
            )}
        </div>
    );
}
