import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Inventory from "./pages/Inventory";
import Machinery from "./pages/Machinery";
import Reports from "./pages/Reports";
import EmployeesMap from "./pages/EmployeesMap";
import Messages from "./pages/Messages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/attendance" element={<Inventory />} />
      <Route path="/schedule" element={<Machinery />} />
      <Route path="/payroll" element={<Reports />} />
      <Route path="/map" element={<EmployeesMap />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
}
