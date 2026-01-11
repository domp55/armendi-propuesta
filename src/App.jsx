import { Routes, Route, Navigate } from "react-router-dom";
import Employees from "./pages/Employees";
import EmployeesMap from "./pages/EmployeesMap";
// import Patients from "./pages/Patients";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/map" element={<EmployeesMap />} />
    </Routes>
  );
}
