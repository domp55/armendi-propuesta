import BloodPressureChart from "./fragments/BloodPressureChart";
import BPDetails from "./fragments/BPDetails";
import VitalCard from "./fragments/VitalCard";

// images
import heardImg from "../img/HeartBPM.png";
import respiratoyImg from "../img/respiratoryRate.png";
import temperatureImg from "../img/temperature.png";

import "../styles/DiagnosisHistoryStyle.css";

export default function DiagnosisHistory({ chartData, latest }) {
  const systolic = latest.blood_pressure.systolic.value;
  const systolicLevel = latest.blood_pressure.systolic.levels;

  const diastolic = latest.blood_pressure.diastolic.value;
  const diastolicLevel = latest.blood_pressure.diastolic.levels;

  const respiration = latest.respiratory_rate.value;
  const respirationLevel = latest.respiratory_rate.levels;

  const temperature = latest.temperature.value;
  const temperatureLevel = latest.temperature.levels;

  const heartRate = latest.heart_rate.value;
  const heartRateLevel = latest.heart_rate.levels;

  return (
    <div className="dh-container">
      <h2 className="dh-title">Diagnosis History</h2>

      {/* BLOQUE VIOLETA */}
      <div className="dh-main-block">
        <div className="dh-main-grid">
          <div className="dh-chart-col">
            <BloodPressureChart data={chartData} />
          </div>

          <BPDetails
            systolic={systolic}
            systolicLevel={systolicLevel}
            diastolic={diastolic}
            diastolicLevel={diastolicLevel}
          />
        </div>
      </div>

      {/* VITAL CARDS */}
      <div className="dh-vital-grid">
        <VitalCard
          title="Respiratory Rate"
          value={`${respiration} bpm`}
          status={respirationLevel}
          icon={respiratoyImg}
          color="#E0F3FA"
        />

        <VitalCard
          title="Temperature"
          value={`${temperature}°F`}
          status={temperatureLevel}
          icon={temperatureImg}
          color="#FFE6E9"
        />

        <VitalCard
          title="Heart Rate"
          value={`${heartRate} bpm`}
          status={heartRateLevel}
          icon={heardImg}
          color="#FFE6F1"
        />
      </div>
    </div>
  );
}
