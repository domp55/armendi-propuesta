import "../../styles/DiagnosticListStyle.css";

export default function DiagnosticList({ data }) {
    return (
      <div className="diagnostic-card">
        <h2 className="dia-title">Diagnostic List</h2>
  
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
  
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  