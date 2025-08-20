import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const nav = useNavigate();

  const Item = ({ to, children }) => (
    <button
      onClick={() => nav(to)}
      className="w-full text-left px-4 py-2 rounded hover:bg-brand-100"
    >
      {children}
    </button>
  );

  return (
    <aside className="bg-white w-56 p-4 border-r border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-9 w-9 rounded bg-brand-700 grid place-items-center text-white text-sm font-bold">HA</div>
        <span className="font-semibold">Hostel Alfar</span>
      </div>
      <nav className="space-y-1">
        <Item to="/inicio">Camas</Item>
        <Item to="/reservas">Reservas</Item>
        <Item to="/calendario">Calendario</Item>
        <Item to="/huespedes">Huéspedes</Item>
        <Item to="/reportes">Reportes</Item>
      </nav>
    </aside>
  );
}
