export default function BedGrid({ items, onSelect }) {
    const colorFor = (status) =>
      status === "libre"
        ? "bg-status-libre"
        : status === "ocupado"
        ? "bg-status-ocupado"
        : "bg-status-mantenimiento";
  
    return (
      <div className="grid grid-cols-6 gap-3">
        {items.map((b) => (
          <button
            key={b.id}
            onClick={() => onSelect(b)}
            className={`h-20 rounded text-white font-medium shadow hover:opacity-90 transition ${colorFor(
              b.status
            )}`}
            title={`${b.name} • ${b.status}`}
          >
            <div className="text-sm">{b.name}</div>
            <div className="text-xs opacity-90">
              {b.status === "ocupado" ? b.guest : b.status}
            </div>
          </button>
        ))}
      </div>
    );
  }
  