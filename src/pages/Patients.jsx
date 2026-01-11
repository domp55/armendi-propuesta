import "../styles/PatientsStyle.css";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import PatientInfo from "../components/PatientInfo";
import Header from "../components/Header";
import DiagnosisHistory from "../components/DiagnosisHistory";
import DiagnosticList from "../components/lists/DiagnosticList";
import LabResults from "../components/lists/LabResults";
import { peticionGet } from "../utiles/hooks/Conexion";

export default function Patients() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchPatients() {
            try {
                const data = await peticionGet(
                    "https://fedskillstest.coalitiontechnologies.workers.dev",
                    {
                        Authorization: "Basic " + btoa("coalition:skills-test")
                    }
                );

                setPatients(data);
            } catch (e) {
                console.error("Error fetching patients:", e);
            }
        }

        fetchPatients();
    }, []);
    const jessica = patients.find((p) => p.name === "Jessica Taylor");
    const latest = jessica?.diagnosis_history[0];

    function mapChartData(history) {
        return history.slice(0, 6).reverse().map((item) => ({
            month: `${item.month.slice(0, 3)}, ${item.year}`,
            systolic: item.blood_pressure.systolic.value,
            diastolic: item.blood_pressure.diastolic.value,
        }));
    }

    return (
        <div>
            <Header />

            <div className="page-container">
                <Sidebar patients={patients} selected="Jessica Taylor" />

                <main className="main-content">
                    {jessica && (
                        <>
                            <div className="diagnosis-history-wrapper">
                                <DiagnosisHistory
                                    chartData={mapChartData(
                                        jessica.diagnosis_history.slice(0, 6)
                                    )}
                                    latest={latest}
                                />
                            </div>

                            <div className="patient-info-wrapper">
                                <PatientInfo data={jessica} />
                            </div>

                            <div className="diagnostic-list-wrapper">
                                <DiagnosticList data={jessica.diagnostic_list} />
                            </div>

                            <div className="lab-results-wrapper">
                                <LabResults data={jessica.lab_results} />
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}
