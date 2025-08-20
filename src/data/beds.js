// Estados: "libre" | "ocupado" | "mantenimiento"
export const beds = Array.from({ length: 24 }).map((_, i) => {
    const id = i + 1;
    const status = id % 7 === 0 ? "mantenimiento" : id % 3 === 0 ? "ocupado" : "libre";
    const guest = status === "ocupado" ? (id % 2 ? "Juan Pérez" : "Flor Toor") : null;
    const checkIn = status === "ocupado" ? "2025-06-0" + ((id % 9) + 1) : null;
    const checkOut = status === "ocupado" ? "2025-06-2" + ((id % 7) + 1) : null;
    return { id, name: `Cama ${id}`, status, guest, checkIn, checkOut };
  });
  