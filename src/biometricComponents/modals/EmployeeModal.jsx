import { useState } from "react";
import "../../styles/biometric/EmployeeModalStyle.css";
import {
    FiX,
    FiUser,
    FiBriefcase,
    FiMapPin,
    FiDollarSign,
    FiClock,
    FiCreditCard,
    FiCalendar,
    FiPhone,
    FiMail,
} from "react-icons/fi";

const departments = ["Extracción", "Transporte", "Perforación", "Mantenimiento", "Planta", "Caminos", "Administración"];
const sectors = ["Sector A", "Sector B", "Sector C", "Sector D", "Planta Procesadora", "Almacén Central"];
const positions = [
    "Operador de Excavadora", "Operador de Camión", "Perforista",
    "Supervisor de Turno", "Ingeniero de Minas", "Técnico de Mantenimiento",
    "Operador de Cargador", "Geólogo", "Supervisor de Seguridad",
    "Mecánico de Maquinaria", "Electricista Industrial", "Operador de Trituradora",
    "Analista de Producción", "Jefe de Área", "Técnico de Explosivos",
    "Operador de Grúa", "Inspector de Calidad", "Técnico de Laboratorio",
    "Coordinador de Transporte", "Asistente Administrativo", "Almacenero",
    "Soldador Industrial", "Operador de Bomba", "Auxiliar de Mantenimiento"
];
const schedules = [
    "06:00 - 14:00 (Turno Mañana)",
    "14:00 - 22:00 (Turno Tarde)",
    "22:00 - 06:00 (Turno Noche)",
    "07:00 - 15:00 (Administrativo)",
    "Rotativo (7x7)"
];

export default function EmployeeModal({ employee, onClose, onSave }) {
    const isEditing = !!employee;

    const [formData, setFormData] = useState({
        name: employee?.name || "",
        dni: employee?.dni || "",
        email: employee?.email || "",
        phone: employee?.phone || "",
        department: employee?.department || departments[0],
        sector: employee?.sector || sectors[0],
        position: employee?.position || positions[0],
        salary: employee?.salary || "",
        schedule: employee?.schedule || schedules[0],
        startDate: employee?.startDate || new Date().toISOString().split('T')[0],
        biometricId: employee?.biometricId || "",
        emergencyContact: employee?.emergencyContact || "",
        bloodType: employee?.bloodType || "",
        notes: employee?.notes || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...formData,
            id: employee?.id || `E${String(Math.floor(Math.random() * 900) + 100).padStart(3, '0')}`,
            attendance: employee?.attendance ?? 0,
            isFired: false,
        });
    };

    const generateBiometricId = () => {
        const newId = `ZK-${Math.floor(Math.random() * 9000) + 1000}`;
        setFormData(prev => ({ ...prev, biometricId: newId }));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{isEditing ? "Editar Empleado" : "Nuevo Empleado"}</h2>
                    <button className="modal-close" onClick={onClose}>
                        <FiX size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    {/* Información Personal */}
                    <div className="form-section">
                        <h3><FiUser /> Información Personal</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Nombre Completo *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ej: Juan Carlos Pérez"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>DNI / Cédula *</label>
                                <input
                                    type="text"
                                    name="dni"
                                    value={formData.dni}
                                    onChange={handleChange}
                                    placeholder="Ej: 12345678"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label><FiMail size={14} /> Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                            <div className="form-group">
                                <label><FiPhone size={14} /> Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+593 999 999 999"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Información Laboral */}
                    <div className="form-section">
                        <h3><FiBriefcase /> Información Laboral</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Departamento *</label>
                                <select name="department" value={formData.department} onChange={handleChange}>
                                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label><FiMapPin size={14} /> Sector *</label>
                                <select name="sector" value={formData.sector} onChange={handleChange}>
                                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Cargo *</label>
                                <select name="position" value={formData.position} onChange={handleChange}>
                                    {positions.map(p => <option key={p} value={p}>{p}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label><FiDollarSign size={14} /> Salario Mensual ($)</label>
                                <input
                                    type="number"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    placeholder="Ej: 1500"
                                    min="0"
                                    step="0.01"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label><FiClock size={14} /> Horario *</label>
                                <select name="schedule" value={formData.schedule} onChange={handleChange}>
                                    {schedules.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label><FiCalendar size={14} /> Fecha de Ingreso</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dispositivo Biométrico */}
                    <div className="form-section biometric-section">
                        <h3><FiCreditCard /> Dispositivo Biométrico ZKTeco</h3>
                        <div className="form-row">
                            <div className="form-group biometric-group">
                                <label>ID Biométrico</label>
                                <div className="biometric-input">
                                    <input
                                        type="text"
                                        name="biometricId"
                                        value={formData.biometricId}
                                        onChange={handleChange}
                                        placeholder="Sin asignar"
                                        readOnly
                                    />
                                    <button type="button" className="generate-btn" onClick={generateBiometricId}>
                                        {formData.biometricId ? "Regenerar" : "Generar ID"}
                                    </button>
                                </div>
                                <span className="helper-text">
                                    Este ID se sincronizará con el reloj biométrico ZKTeco
                                </span>
                            </div>
                        </div>
                        <div className="biometric-status">
                            <div className="status-item">
                                <span className="status-dot synced"></span>
                                <span>Huella registrada: {formData.biometricId ? "Pendiente de sincronización" : "No configurado"}</span>
                            </div>
                            <div className="status-item">
                                <span className="status-dot"></span>
                                <span>Rostro registrado: No configurado</span>
                            </div>
                        </div>
                    </div>

                    {/* Información Adicional */}
                    <div className="form-section">
                        <h3>Información Adicional</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Contacto de Emergencia</label>
                                <input
                                    type="text"
                                    name="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleChange}
                                    placeholder="Nombre y teléfono"
                                />
                            </div>
                            <div className="form-group">
                                <label>Tipo de Sangre</label>
                                <select name="bloodType" value={formData.bloodType} onChange={handleChange}>
                                    <option value="">Seleccionar</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label>Notas</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Observaciones adicionales..."
                                rows={3}
                            />
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-save">
                            {isEditing ? "Guardar Cambios" : "Crear Empleado"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
