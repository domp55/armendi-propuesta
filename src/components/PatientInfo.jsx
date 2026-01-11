import { FiCalendar, FiUser, FiPhone, FiShield } from "react-icons/fi";
import { MdContactPhone } from "react-icons/md";
import "../styles/PatientInfoStyle.css";

export default function PatientInfo({ data }) {
  return (
    <aside className="patient-info">

      <img src={data.profile_picture} className="pi-avatar" alt="profile" />

      <h2 className="pi-name">{data.name}</h2>

      <ul className="pi-list">

        <li>
          <FiCalendar className="pi-icon" />
          <div>
            <p className="pi-label">Date Of Birth</p>
            <p className="pi-value">{data.date_of_birth}</p>
          </div>
        </li>

        <li>
          <FiUser className="pi-icon" />
          <div>
            <p className="pi-label">Gender</p>
            <p className="pi-value">{data.gender}</p>
          </div>
        </li>

        <li>
          <FiPhone className="pi-icon" />
          <div>
            <p className="pi-label">Contact Info.</p>
            <p className="pi-value">{data.phone_number}</p>
          </div>
        </li>

        <li>
          <MdContactPhone className="pi-icon" />
          <div>
            <p className="pi-label">Emergency Contacts</p>
            <p className="pi-value">{data.emergency_contact}</p>
          </div>
        </li>

        <li>
          <FiShield className="pi-icon" />
          <div>
            <p className="pi-label">Insurance Provider</p>
            <p className="pi-value">{data.insurance_type}</p>
          </div>
        </li>

      </ul>

      <button className="pi-btn">
        Show All Information
      </button>

    </aside>
  );
}
