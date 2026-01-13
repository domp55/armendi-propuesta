import "../../styles/biometric/EmployeeCardStyle.css";

export default function EmployeeCard({ employee }) {
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
                <p className="employee-id">ID: {employee.id}</p>
            </div>
            <div className="attendance-badge">
                {isFired ? "DESPEDIDO" : isAbsent ? "AUSENTE" : "PRESENTE"}
            </div>
            {isFired && employee.firedDate && (
                <div className="fired-date">
                    Baja: {employee.firedDate}
                </div>
            )}
        </div>
    );
}
