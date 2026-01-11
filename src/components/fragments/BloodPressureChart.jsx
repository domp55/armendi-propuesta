import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function BloodPressureChart({ data }) {
  const labels = data.map((item) => item.month);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: data.map((item) => item.systolic),
        borderColor: "#D946EF", // Rosa
        backgroundColor: "rgba(217, 70, 239, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
      },
      {
        label: "Diastolic",
        data: data.map((item) => item.diastolic),
        borderColor: "#6366F1", // Morado
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div >
      <Line data={chartData} options={options} />
    </div>
  );
}
