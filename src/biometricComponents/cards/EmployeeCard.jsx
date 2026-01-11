import "../../styles/biometric/EmployeeCardStyle.css";

export default function EmployeeCard({ employee }) {
    const isAbsent = employee.attendance === 1;
    const cardClass = isAbsent ? "employee-card absent" : "employee-card present";

    return (
        <div className={cardClass}>
            <div className="employee-avatar">
                {employee.name.charAt(0)}
            </div>
            <div className="employee-details">
                <h3 className="employee-name">{employee.name}</h3>
                <p className="employee-position">{employee.position}</p>
                <p className="employee-id">ID: {employee.id}</p>
            </div>
            <div className="attendance-badge">
                {isAbsent ? "AUSENTE" : "PRESENTE"}
            </div>
        </div>
    );
}
