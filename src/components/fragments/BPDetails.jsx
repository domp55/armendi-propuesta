import { getStatusMeta } from "../../utiles/statusArrow";
import "../../styles/BPDetailsStyle.css";

export default function BPDetails({
    systolic,
    systolicLevel,
    diastolic,
    diastolicLevel,
}) {
    const { arrow: sysArrow } = getStatusMeta(systolicLevel);
    const { arrow: diaArrow } = getStatusMeta(diastolicLevel);

    return (
        <div className="bp-details">

            {/* Systolic */}
            <div className="bp-block">
                <div className="bp-dot systolic-dot"></div>

                <p className="bp-label">Systolic</p>
                <p className="bp-value">{systolic}</p>

                <p className="bp-status">
                    {sysArrow} {systolicLevel}
                </p>
            </div>

            <div className="bp-divider"></div>

            {/* Diastolic */}
            <div className="bp-block">
                <div className="bp-dot diastolic-dot"></div>

                <p className="bp-label">Diastolic</p>
                <p className="bp-value">{diastolic}</p>

                <p className="bp-status">
                    {diaArrow} {diastolicLevel}
                </p>
            </div>

        </div>
    );
}
