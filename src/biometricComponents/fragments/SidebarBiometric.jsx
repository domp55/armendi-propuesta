import "../../styles/biometric/SidebarStyle.css";
import { FiUsers } from "react-icons/fi";

export default function SidebarBiometric() {
  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <FiUsers />
        <span>Gestión de Personal</span>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        <div className="sidebar-item active">Total</div>
        <div className="sidebar-item">Departamento</div>
        <div className="sidebar-item">Cargo</div>
        <div className="sidebar-item">Área</div>
        <div className="sidebar-item">Empleado</div>
        <div className="sidebar-item">Renuncia</div>
      </div>
    </aside>
  );
}
