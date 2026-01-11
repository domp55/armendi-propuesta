import "../styles/SidebarStyle.css";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

export default function Sidebar({ patients, selected }) {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h3 className="patients-title">Patients</h3>
        <button className="search-btn">
          <FiSearch size={20} />
        </button>
      </div>
      
      <ul>
        {patients.map((p) => (
          <li
            key={p.name}
            className={p.name === selected ? "active" : ""}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={p.profile_picture} alt={p.name} />
              <div>
                <p>{p.name}</p>
                <span>{p.gender}, {p.age}</span>
              </div>
            </div>

            <button className="menu-btn">
              <FiMoreHorizontal size={20} />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
