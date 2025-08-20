import { useState } from "react";
import Sidebar from "../components/Sidebar";
import BedGrid from "../components/BedGrid";
import BedDetailPanel from "../components/BedDetailPanel";
import { beds as mockBeds } from "../data/beds";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [selected, setSelected] = useState(null);
  const nav = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("authed");
    nav("/login");
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Gestión de Camas</h2>
          <div className="flex items-center gap-2">
            <button className="btn border border-gray-300" onClick={() => window.location.reload()}>
              Refrescar
            </button>
            <button className="btn btn-primary" onClick={logout}>Cerrar sesión</button>
          </div>
        </header>

        {/* leyenda de estados */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <Legend color="bg-status-libre" label="Libre" />
          <Legend color="bg-status-ocupado" label="Ocupado" />
          <Legend color="bg-status-mantenimiento" label="Mantenimiento" />
        </div>

        <div className="card p-4">
          <BedGrid items={mockBeds} onSelect={setSelected} />
        </div>
      </main>

      <BedDetailPanel bed={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block w-3 h-3 rounded ${color}`} />
      <span>{label}</span>
    </div>
  );
}
