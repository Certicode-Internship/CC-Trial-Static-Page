import { useState } from "react";

function SelectField({ label, value }) {
  return (
    <button className="border-0 bg-transparent p-0 text-left text-[#f6eee4]">
      <small className="mb-1.5 block font-body text-[11px] font-bold uppercase tracking-[1px] text-[#f6d1a8]">
        {label}
      </small>
      <span className="flex h-11 items-center justify-between rounded-[3px] border border-[#ffd395]/20 bg-[#261a18] px-3 font-display text-base font-semibold">
        {value}
        <i className="text-[21px] text-[#e7a251]">⌄</i>
      </span>
    </button>
  );
}

export default function ReserveTable({ onFindTable }) {
  const [service, setService] = useState("Dine-in");
  return (
    <section
      className="relative z-2 mx-auto mt-7.5 w-[calc(100%-48px)] max-w-297.5 rounded-[7px] border-t border-[#ffc6744d] bg-[linear-gradient(105deg,#4b150f,#7e1f16_64%,#53150e)] px-8.75 pt-6.25 pb-7.25 shadow-[0_12px_35px_rgba(0,0,0,.4)] max-md:grid max-md:grid-cols-2 max-md:gap- max-sm:mt- max-sm:block max-sm:w-[calc(100%-30px)] max-sm:p-5"
      id="reservation"
    >
      <div className="flex items-end justify-between max-sm:flex-col max-sm:items-start max-sm:gap">
        <div>
          <p className="mb-2 font-body text-xs font-bold uppercase tracking-[2px] text-[#e6a653]">
            Skip the wait
          </p>
          <h2 className="m-0 font-display text-[37px] leading-[.9] font-extrabold uppercase tracking-[.3px] max-sm:text-[32px]">
            Reserve your table
          </h2>
        </div>
        <div className="flex rounded-sm border border-[#ffe1b44d] bg-black/20 p-0.75 max-sm:w-full">
          {["Dine-in", "Takeaway"].map((option) => (
            <button
              className={`min-w-33 border-0 px-4 py-2 font-display text-sm font-extrabold uppercase ${service === option ? "rounded-sm bg-cheddar text-[#24160e]" : "bg-transparent text-[#f6e9d8]"} max-sm:flex-1`}
              key={option}
              type="button"
              onClick={() => setService(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-[repeat(4,1fr)_1.05fr] gap-3.5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <SelectField label="Party size" value="2 Guests" />
        <SelectField label="Date" value="Today, Aug 25" />
        <SelectField label="Time" value="7:00 PM" />
        <SelectField label="Seating zone" value="Main Dining" />
        <button
          className="inline-flex h-11 min-h-11 items-center justify-center gap-7.5 self-end rounded-sm border-0 bg-cheddar px-4.75 font-display text-base font-extrabold uppercase tracking-[.4px] text-[#181615] shadow-[0_4px_10px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5 max-md:col-span-2 max-sm:col-auto"
          type="button"
          onClick={() => onFindTable(service)}
        >
          Find table <span>→</span>
        </button>
      </div>
    </section>
  );
}
