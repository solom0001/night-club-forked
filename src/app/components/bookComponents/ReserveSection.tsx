"use client";

import { useState } from "react";
import Tables from "./Tables";
import ReserveForm from "./ReserveForm";

export default function ReserveSection() {
  const [day, setDay] = useState<string>("");
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [reservations, setReservations] = useState([]);

  async function fetchReservations(date: string) {
    if (!date) return;

    const res = await fetch(`http://localhost:4000/reservations?date=${date}`);
    const data = await res.json();
    setReservations(data);
  }

  return (
    <div className="mt-8">
      <Tables
        reservations={reservations}
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
      />
      <ReserveForm
        day={day}
        selectedTable={selectedTable}
        setDay={(d: string) => {
          setDay(d);
          fetchReservations(d);
        }}
      />
    </div>
  );
}
