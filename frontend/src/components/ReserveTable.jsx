import { useState } from "react";

function SelectField({ label, value }) {
  return (
    <button className="select" type="button">
      <small>{label}</small>
      <span>
        {value}
        <i>⌄</i>
      </span>
    </button>
  );
}

export default function ReserveTable({ onFindTable }) {
  const [service, setService] = useState("Dine-in");
  return (
    <section className="booking wrap" id="reservation">
      <div className="booking-top">
        <div>
          <p className="eyebrow">Skip the wait</p>
          <h2>Reserve your table</h2>
        </div>
        <div className="toggle" aria-label="Service type">
          {["Dine-in", "Takeaway"].map((option) => (
            <button
              className={service === option ? "selected" : ""}
              key={option}
              type="button"
              onClick={() => setService(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="booking-fields">
        <SelectField label="Party size" value="2 Guests" />
        <SelectField label="Date" value="Today, Aug 25" />
        <SelectField label="Time" value="7:00 PM" />
        <SelectField label="Seating zone" value="Main Dining" />
        <button
          className="btn find"
          type="button"
          onClick={() => onFindTable(service)}
        >
          Find table <span>→</span>
        </button>
      </div>
    </section>
  );
}
