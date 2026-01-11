import "../../styles/VitalCardStyle.css";
import { getStatusMeta } from "../../utiles/statusArrow";

export default function VitalCard({ title, value, status, icon, color }) {
    const {  arrow } = getStatusMeta(status);
    return (
      <div
        className="vital-card"
        style={{ backgroundColor: color || "#f9fafb" }}  // color dinámico
      >
        <div className="vital-icon">
          <img src={icon} alt="Icon" />
        </div>
  
        <div className="vital-info">
          <p className="vital-title">{title}</p>
          <p className="vital-value">{value}</p>
          <p className="vital-status">{arrow}{status}</p>
        </div>
      </div>
    );
  }
  