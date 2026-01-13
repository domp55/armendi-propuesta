import { QRCodeSVG } from 'qrcode.react';
import "../styles/QRModalStyle.css";
import { FiX, FiUsers, FiBox, FiTool, FiBarChart2, FiMap, FiMessageSquare, FiExternalLink } from "react-icons/fi";
import logo from "../img/armendi_logo.jpg";

export default function QRModal({ onClose }) {
    const deploymentUrl = "https://armendi-propuesta-git-main-domp55s-projects.vercel.app";

    return (
        <div className="qr-modal-overlay" onClick={onClose}>
            <div className="qr-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="qr-modal-close" onClick={onClose}>
                    <FiX size={20} />
                </button>

                <div className="qr-modal-content">
                    {/* Logo y título */}
                    <div className="qr-header">
                        <img src={logo} alt="ARMENDI" className="qr-logo" />
                        <h2>Sistema de Gestión Minera</h2>
                        <p className="qr-subtitle">Propuesta de Software Integral</p>
                    </div>

                    {/* Descripción */}
                    <div className="qr-description">
                        <p>
                            Solución completa para la gestión centralizada de operaciones mineras,
                            diseñada para optimizar el control de personal, inventario, maquinaria
                            y comunicaciones en tiempo real.
                        </p>
                    </div>

                    {/* Características */}
                    <div className="qr-features">
                        <div className="qr-feature">
                            <FiUsers className="feature-icon" />
                            <span>Gestión de Personal</span>
                        </div>
                        <div className="qr-feature">
                            <FiBox className="feature-icon" />
                            <span>Control de Inventario</span>
                        </div>
                        <div className="qr-feature">
                            <FiTool className="feature-icon" />
                            <span>Gestión de Maquinaria</span>
                        </div>
                        <div className="qr-feature">
                            <FiBarChart2 className="feature-icon" />
                            <span>Reportes y Análisis</span>
                        </div>
                        <div className="qr-feature">
                            <FiMap className="feature-icon" />
                            <span>Mapa de Operaciones</span>
                        </div>
                        <div className="qr-feature">
                            <FiMessageSquare className="feature-icon" />
                            <span>Comunicación Interna</span>
                        </div>
                    </div>

                    {/* Integración Biométrica */}
                    <div className="qr-biometric-badge">
                        <span>✓ Integración con Relojes Biométricos ZKTeco</span>
                    </div>

                    {/* QR Code */}
                    <div className="qr-code-section">
                        <p className="qr-scan-text">Escanea para ver la demo en línea:</p>
                        <div className="qr-code-wrapper">
                            <QRCodeSVG
                                value={deploymentUrl}
                                size={180}
                                level="H"
                                includeMargin={true}
                                bgColor="#ffffff"
                                fgColor="#0d1b2a"
                            />
                        </div>
                        <a
                            href={deploymentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="qr-link"
                        >
                            <FiExternalLink size={14} />
                            Abrir Demo en Navegador
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="qr-footer">
                        <p>Desarrollado para <strong>ARMENDI Minera y Constructora</strong></p>
                        <p className="qr-copyright">© 2026 - Sistema de Gestión Minera</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
