import "../../styles/biometric/AttendanceSummaryStyle.css";

export default function AttendanceSummary({ presentCount, absentCount, totalCount }) {
    return (
        <div className="attendance-summary">
            <div className="summary-card present-card">
                <h4>Presentes</h4>
                <span className="count">{presentCount}</span>
            </div>
            <div className="summary-card absent-card">
                <h4>Ausentes</h4>
                <span className="count">{absentCount}</span>
            </div>
            <div className="summary-card total-card">
                <h4>Total</h4>
                <span className="count">{totalCount}</span>
            </div>
        </div>
    );
}
