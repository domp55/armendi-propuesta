import { useState } from "react";
import "../../styles/biometric/SidebarStyle.css";
import {
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiChevronDown,
  FiChevronRight,
  FiGrid,
  FiMapPin,
  FiBriefcase,
  FiUserMinus
} from "react-icons/fi";

export default function SidebarBiometric({
  onFilterChange,
  currentFilter,
  departments = [],
  sectors = [],
  positions = [],
  firedCount = 0
}) {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleFilterClick = (type, value = null) => {
    if (onFilterChange) {
      onFilterChange({ type, value });
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const isActive = (type, value = null) => {
    return currentFilter?.type === type && currentFilter?.value === value;
  };

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <FiUsers />
        <span>Gestión de Personal</span>
      </div>

      {/* Filtros principales */}
      <div className="sidebar-menu">
        <div
          className={`sidebar-item ${isActive("all") ? "active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          <FiUsers size={16} />
          Total
        </div>
        <div
          className={`sidebar-item ${isActive("present") ? "active" : ""}`}
          onClick={() => handleFilterClick("present")}
        >
          <FiUserCheck size={16} />
          Presentes
        </div>
        <div
          className={`sidebar-item ${isActive("absent") ? "active" : ""}`}
          onClick={() => handleFilterClick("absent")}
        >
          <FiUserX size={16} />
          Ausentes
        </div>
      </div>

      {/* Sección de filtros avanzados */}
      <div className="sidebar-section-title">Filtros Avanzados</div>

      {/* Por Departamento */}
      <div className="sidebar-menu">
        <div
          className={`sidebar-item expandable ${expandedSection === "department" ? "expanded" : ""}`}
          onClick={() => toggleSection("department")}
        >
          <FiGrid size={16} />
          Por Departamento
          {expandedSection === "department" ? <FiChevronDown className="chevron" /> : <FiChevronRight className="chevron" />}
        </div>
        {expandedSection === "department" && (
          <div className="sidebar-submenu">
            {departments.map(dept => (
              <div
                key={dept}
                className={`sidebar-submenu-item ${isActive("department", dept) ? "active" : ""}`}
                onClick={() => handleFilterClick("department", dept)}
              >
                {dept}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Por Sector */}
      <div className="sidebar-menu">
        <div
          className={`sidebar-item expandable ${expandedSection === "sector" ? "expanded" : ""}`}
          onClick={() => toggleSection("sector")}
        >
          <FiMapPin size={16} />
          Por Sector
          {expandedSection === "sector" ? <FiChevronDown className="chevron" /> : <FiChevronRight className="chevron" />}
        </div>
        {expandedSection === "sector" && (
          <div className="sidebar-submenu">
            {sectors.map(sector => (
              <div
                key={sector}
                className={`sidebar-submenu-item ${isActive("sector", sector) ? "active" : ""}`}
                onClick={() => handleFilterClick("sector", sector)}
              >
                {sector}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Por Cargo */}
      <div className="sidebar-menu">
        <div
          className={`sidebar-item expandable ${expandedSection === "position" ? "expanded" : ""}`}
          onClick={() => toggleSection("position")}
        >
          <FiBriefcase size={16} />
          Por Cargo
          {expandedSection === "position" ? <FiChevronDown className="chevron" /> : <FiChevronRight className="chevron" />}
        </div>
        {expandedSection === "position" && (
          <div className="sidebar-submenu">
            {positions.map(pos => (
              <div
                key={pos}
                className={`sidebar-submenu-item ${isActive("position", pos) ? "active" : ""}`}
                onClick={() => handleFilterClick("position", pos)}
              >
                {pos}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Despedidos */}
      <div className="sidebar-menu">
        <div
          className={`sidebar-item fired ${isActive("fired") ? "active" : ""}`}
          onClick={() => handleFilterClick("fired")}
        >
          <FiUserMinus size={16} />
          Despedidos
          {firedCount > 0 && <span className="fired-count">{firedCount}</span>}
        </div>
      </div>
    </aside>
  );
}
