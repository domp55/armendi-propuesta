import { useState } from "react";
import Header from "../components/Header";
import "../styles/MessagesStyle.css";
import {
    FiInbox,
    FiSend,
    FiStar,
    FiTrash2,
    FiSearch,
    FiPaperclip,
    FiChevronRight,
} from "react-icons/fi";

const folders = [
    { id: "inbox", name: "Bandeja de Entrada", icon: FiInbox, count: 12 },
    { id: "sent", name: "Enviados", icon: FiSend, count: 0 },
    { id: "starred", name: "Destacados", icon: FiStar, count: 3 },
    { id: "trash", name: "Papelera", icon: FiTrash2, count: 0 },
];

const messagesData = [
    {
        id: 1,
        from: "Seguridad Industrial",
        subject: "Alerta: Protocolo de evacuación actualizado",
        preview: "Se ha actualizado el protocolo de evacuación para el Sector B. Todos los supervisores deben revisar...",
        body: `Estimados,

Se ha actualizado el protocolo de evacuación para el Sector B debido a los recientes cambios en la infraestructura.

Puntos clave del nuevo protocolo:
• Nueva ruta de evacuación hacia el punto de reunión Este
• Tiempo máximo de evacuación: 8 minutos
• Ejercicio de simulacro programado para el 20 de enero

Todos los supervisores deben revisar el documento adjunto y confirmar su lectura antes del viernes.

Saludos,
Departamento de Seguridad Industrial`,
        time: "09:45 AM",
        date: "12 Ene 2026",
        unread: true,
        starred: true,
        hasAttachment: true,
    },
    {
        id: 2,
        from: "Recursos Humanos",
        subject: "Recordatorio: Capacitación obligatoria",
        preview: "La capacitación de seguridad minera para nuevos empleados se realizará el próximo lunes a las 8:00 AM...",
        body: `Buen día,

Les recordamos que la capacitación de seguridad minera para nuevos empleados se realizará el próximo lunes 15 de enero a las 8:00 AM en la sala de conferencias principal.

Temas a tratar:
1. Normativas de seguridad
2. Uso correcto de EPP
3. Procedimientos de emergencia
4. Primeros auxilios básicos

La asistencia es obligatoria para todo el personal que ingresó en los últimos 30 días.

Atentamente,
Recursos Humanos`,
        time: "08:30 AM",
        date: "12 Ene 2026",
        unread: true,
        starred: false,
        hasAttachment: false,
    },
    {
        id: 3,
        from: "Mantenimiento",
        subject: "Excavadora #03 - Reporte de avería",
        preview: "Se informa que la excavadora #03 presenta falla en el sistema hidráulico y estará fuera de servicio...",
        body: `Informe de Avería - Excavadora CAT 374F (#03)

Fecha del incidente: 12 de enero, 2026
Hora: 06:30 AM
Ubicación: Sector A - Zona de extracción

Descripción del problema:
La excavadora presenta una falla crítica en el sistema hidráulico principal. Se detectó una fuga significativa en el cilindro del brazo.

Diagnóstico preliminar:
• Sello del cilindro dañado
• Posible contaminación del fluido hidráulico

Tiempo estimado de reparación: 3-5 días
Repuestos necesarios: Sello de cilindro hidráulico, filtros

Se requiere autorización para proceder con la compra de repuestos.

Equipo de Mantenimiento`,
        time: "07:15 AM",
        date: "12 Ene 2026",
        unread: true,
        starred: true,
        hasAttachment: true,
    },
    {
        id: 4,
        from: "Operaciones",
        subject: "Producción semanal - Sector C",
        preview: "Adjunto el reporte de producción semanal del Sector C. Se alcanzó el 98% de la meta establecida...",
        body: `Reporte de Producción Semanal
Sector C - Perforación
Semana del 6 al 12 de enero, 2026

Resumen:
• Meta semanal: 15,000 toneladas
• Producción real: 14,700 toneladas
• Porcentaje alcanzado: 98%

Observaciones:
La leve diferencia se debe a una pausa técnica de 4 horas el día jueves por ajustes en la perforadora Sandvik.

Próxima semana:
Se proyecta alcanzar el 102% de la meta con el nuevo equipo de turno nocturno.

Coordinación de Operaciones`,
        time: "Ayer",
        date: "11 Ene 2026",
        unread: false,
        starred: false,
        hasAttachment: true,
    },
    {
        id: 5,
        from: "Gerencia General",
        subject: "Reunión trimestral de resultados",
        preview: "Se convoca a todos los jefes de área a la reunión trimestral de resultados que se llevará a cabo...",
        body: `Estimados Jefes de Área,

Se convoca a la reunión trimestral de resultados correspondiente al Q4 2025 y proyecciones Q1 2026.

Fecha: Viernes 17 de enero, 2026
Hora: 10:00 AM - 12:00 PM
Lugar: Sala de Directorio

Agenda:
1. Revisión de indicadores Q4 2025
2. Análisis de cumplimiento de metas
3. Proyecciones Q1 2026
4. Nuevos proyectos de expansión
5. Preguntas y comentarios

Se solicita puntualidad y preparar un breve informe de su área.

Gerencia General`,
        time: "Ayer",
        date: "11 Ene 2026",
        unread: false,
        starred: true,
        hasAttachment: false,
    },
    {
        id: 6,
        from: "Almacén Central",
        subject: "Stock bajo - Cascos de seguridad",
        preview: "Se informa que el stock de cascos de seguridad ha llegado al nivel crítico (12 unidades)...",
        body: `ALERTA DE STOCK BAJO

Producto: Cascos de Seguridad Industrial
Stock actual: 12 unidades
Stock mínimo: 50 unidades
Estado: CRÍTICO

Se recomienda realizar orden de compra urgente para evitar desabastecimiento.

Proveedor sugerido: Seguritec S.A.
Cantidad recomendada: 100 unidades
Tiempo de entrega estimado: 5 días hábiles

Esperamos autorización para proceder.

Almacén Central`,
        time: "10 Ene",
        date: "10 Ene 2026",
        unread: false,
        starred: false,
        hasAttachment: false,
    },
    {
        id: 7,
        from: "Transporte",
        subject: "Actualización de rutas - Sector B",
        preview: "Debido a las lluvias de los últimos días, se han modificado temporalmente las rutas de acceso...",
        body: `Comunicado: Modificación Temporal de Rutas

Motivo: Condiciones climáticas adversas
Áreas afectadas: Sector B - Transporte

Cambios implementados:
• Ruta principal (R-01): CERRADA - Deslizamiento menor
• Ruta alterna (R-02): HABILITADA - Velocidad máxima 30 km/h
• Ruta de emergencia (R-03): DISPONIBLE

Duración estimada: 48-72 horas
Equipo de mantenimiento trabajando en reparación.

Coordinación de Transporte`,
        time: "09 Ene",
        date: "09 Ene 2026",
        unread: false,
        starred: false,
        hasAttachment: false,
    },
];

export default function Messages() {
    const [selectedFolder, setSelectedFolder] = useState("inbox");
    const [selectedMessage, setSelectedMessage] = useState(messagesData[0]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMessages = messagesData.filter((m) =>
        m.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.from.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="messages-container">
                {/* Sidebar */}
                <aside className="messages-sidebar">
                    <button className="compose-btn">+ Nuevo Mensaje</button>
                    <div className="folders-list">
                        {folders.map((folder) => (
                            <div
                                key={folder.id}
                                className={`folder-item ${selectedFolder === folder.id ? "active" : ""}`}
                                onClick={() => setSelectedFolder(folder.id)}
                            >
                                <folder.icon size={18} />
                                <span>{folder.name}</span>
                                {folder.count > 0 && (
                                    <span className="folder-count">{folder.count}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Message List */}
                <div className="messages-list">
                    <div className="list-header">
                        <div className="search-box">
                            <FiSearch />
                            <input
                                type="text"
                                placeholder="Buscar mensajes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="messages-scroll">
                        {filteredMessages.map((message) => (
                            <div
                                key={message.id}
                                className={`message-item ${selectedMessage?.id === message.id ? "selected" : ""} ${message.unread ? "unread" : ""}`}
                                onClick={() => setSelectedMessage(message)}
                            >
                                <div className="message-header">
                                    <span className="message-from">{message.from}</span>
                                    <span className="message-time">{message.time}</span>
                                </div>
                                <div className="message-subject">
                                    {message.starred && <FiStar className="starred" />}
                                    {message.subject}
                                </div>
                                <div className="message-preview">
                                    {message.hasAttachment && <FiPaperclip />}
                                    {message.preview}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message Detail */}
                <div className="message-detail">
                    {selectedMessage ? (
                        <>
                            <div className="detail-header">
                                <h2>{selectedMessage.subject}</h2>
                                <div className="detail-meta">
                                    <span className="sender">{selectedMessage.from}</span>
                                    <span className="date">{selectedMessage.date}</span>
                                </div>
                            </div>
                            <div className="detail-body">
                                <pre>{selectedMessage.body}</pre>
                            </div>
                            {selectedMessage.hasAttachment && (
                                <div className="detail-attachments">
                                    <h4>Archivos adjuntos</h4>
                                    <div className="attachment-item">
                                        <FiPaperclip />
                                        <span>documento_adjunto.pdf</span>
                                    </div>
                                </div>
                            )}
                            <div className="detail-actions">
                                <button className="reply-btn">Responder</button>
                                <button className="forward-btn">Reenviar</button>
                            </div>
                        </>
                    ) : (
                        <div className="no-message">
                            <p>Selecciona un mensaje para ver su contenido</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
