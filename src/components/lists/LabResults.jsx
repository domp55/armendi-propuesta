import { FiDownload } from "react-icons/fi";
import "../../styles/LabResultsStyle.css";

export default function LabResults({ data }) {
  return (
    <div className="lab-card">
      <h2 className="title">Lab Results</h2>

      <ul className="lab-list">
        {data.map((item, index) => (
          <li key={index} className="lab-item">
            <span>{item}</span>
            <FiDownload size={20} className="download-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
}
