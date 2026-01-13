import "../styles/HeaderStyle.css";
import {
  FiHome,
  FiUsers,
  FiMessageSquare,
  FiSettings,
  FiMap,
  FiBox,
  FiTool,
  FiBarChart2,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

import logo from "../img/armendi_logo.jpg";
import doctorImg from "../img/ing.webp";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        {/* Left */}
        <div className="header-left">
          <img src={logo} alt="Tech.Care" className="logo" />
        </div>

        {/* Center – Navigation */}
        <nav className="nav">
          <NavLink to="/dashboard" className="nav-item">
            <FiHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/employees" className="nav-item">
            <FiUsers />
            <span>Gestión de Personal</span>
          </NavLink>

          <NavLink to="/attendance" className="nav-item">
            <FiBox />
            <span>Inventario</span>
          </NavLink>

          <NavLink to="/schedule" className="nav-item">
            <FiTool />
            <span>Maquinarias</span>
          </NavLink>

          <NavLink to="/payroll" className="nav-item">
            <FiBarChart2 />
            <span>Reportes</span>
          </NavLink>

          <NavLink to="/map" className="nav-item">
            <FiMap />
            <span>Mapa</span>
          </NavLink>

          <NavLink to="/messages" className="nav-item">
            <FiMessageSquare />
            <span>Mensajes</span>
          </NavLink>
        </nav>

        {/* Right – Profile */}
        <div className="profile">
          <img src={doctorImg} alt="User" className="profile-img" />
          <div>
            <p className="profile-name">Administrador</p>
            <p className="profile-role">Recursos Humanos</p>
          </div>
          <FiSettings className="profile-settings" />
        </div>
      </header>
    </div>
  );
}
