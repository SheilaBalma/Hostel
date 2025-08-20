import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BedDetailPanel({ bed, onClose }) {
  if (!bed) return null;

  return (
    <div className="fixed inset-0 z-40">
      {/* fondo */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      {/* panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-panel p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Vista de calendario</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="border rounded p-3">
            <div className="text-sm text-gray-500">Cama</div>
            <div className="font-medium">{bed.name}</div>
          </div>

          <div className="border rounded p-3 grid grid-cols-2 gap-3">
            <div>
              <div className="text-sm text-gray-500">Estado actual</div>
              <span className={`inline-block mt-1 px-2 py-1 rounded text-white text-xs
                ${bed.status === "libre" ? "bg-status-libre" : bed.status === "ocupado" ? "bg-status-ocupado" : "bg-status-mantenimiento"}`}>
                {bed.status}
              </span>
            </div>
            <div>
              <div className="text-sm text-gray-500">Huésped actual</div>
              <div className="font-medium">{bed.guest || "—"}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Check-in</div>
              <div className="font-medium">{bed.checkIn || "—"}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Check-out</div>
              <div className="font-medium">{bed.checkOut || "—"}</div>
            </div>
          </div>

          {/* Lugar para el mini calendario u otros detalles */}
          <div className="border rounded p-3">
            <div className="text-sm text-gray-500 mb-2">Calendario de ocupación (placeholder)</div>
            <div className="grid grid-cols-7 gap-1 text-xs">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className={`aspect-square grid place-items-center border rounded
                  ${i % 6 === 0 && bed.status === "ocupado" ? "bg-status-ocupado/20" : ""}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <button onClick={onClose} className="btn w-full border border-gray-300">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
