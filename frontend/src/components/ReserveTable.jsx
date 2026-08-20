import { useCallback, useEffect, useRef, useState } from "react";

const seatingZones = ["2 tables", "4 tables", "main dining", "function hall"];

function getToday() {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function getTimeSlots() {
  const slots = [];
  for (let minutes = 600; minutes <= 1305; minutes += 15) {
    const hour = Math.floor(minutes / 60);
    const suffix = hour >= 12 ? "PM" : "AM";
    slots.push(
      `${hour % 12 || 12}:${String(minutes % 60).padStart(2, "0")} ${suffix}`,
    );
  }
  return slots;
}

const timeSlots = getTimeSlots();

function validatePartySize(value) {
  if (!value) return "Enter the number of guests.";
  if (!/^\d+$/.test(value)) return "Party size must contain digits only.";
  if (Number(value) < 1) return "Party size must be at least 1 guest.";
  if (Number(value) > 20)
    return "At least maximum of 20 pax only can be reserved.";
  return "";
}

function validateDate(value) {
  if (!value) return "Select a reservation date.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value))
    return "Enter a valid reservation date.";
  const parsed = new Date(`${value}T00:00:00`);
  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== value
  )
    return "Enter a valid reservation date.";
  if (value < getToday()) return "Choose today or a future date.";
  return "";
}

function Field({ children, error, id, label }) {
  return (
    <div className="min-w-0">
      <label
        className="mb-1.5 block font-body text-[11px] font-bold uppercase tracking-[1px] text-[#f6d1a8]"
        htmlFor={id}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          className="mt-1.5 font-body text-xs font-semibold leading-tight text-[#ffd395]"
          id={`${id}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function ReserveTable() {
  const [service, setService] = useState("Dine-in");
  const [partySize, setPartySize] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seatingZone, setSeatingZone] = useState("");
  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isConfirmationClosing, setIsConfirmationClosing] = useState(false);
  const okButtonRef = useRef(null);
  const closeAnimationRef = useRef(null);
  const today = getToday();

  const closeConfirmation = useCallback(() => {
    setIsConfirmationClosing((isClosing) => {
      if (isClosing) return isClosing;
      closeAnimationRef.current = window.setTimeout(() => {
        setIsConfirmed(false);
        setIsConfirmationClosing(false);
      }, 220);
      return true;
    });
  }, []);

  useEffect(() => {
    if (!isConfirmed || isConfirmationClosing) return undefined;
    okButtonRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeConfirmation();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeConfirmation, isConfirmed, isConfirmationClosing]);

  useEffect(() => () => window.clearTimeout(closeAnimationRef.current), []);

  const inputClass = (hasError) =>
    `h-12 w-full rounded-[3px] border bg-[#261a18] px-3 font-display text-base font-semibold text-[#f6eee4] outline-none transition placeholder:text-[#f6eee4]/55 focus:border-cheddar focus:ring-1 focus:ring-cheddar ${hasError ? "border-[#ffd395]" : "border-[#ffd395]/20"}`;
  const updateError = (field, error) =>
    setErrors((current) => ({ ...current, [field]: error }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {
      partySize: validatePartySize(partySize),
      date: validateDate(date),
      time: time ? "" : "Select a reservation time.",
      seatingZone: seatingZone ? "" : "Select a seating zone.",
    };
    setErrors(nextErrors);
    if (!Object.values(nextErrors).some(Boolean)) {
      setIsConfirmationClosing(false);
      setIsConfirmed(true);
    }
  };

  return (
    <section
      className="relative z-2 mx-auto mt-8 w-[calc(100%-48px)] max-w-297.5 rounded-[7px] border-t border-[#ffc6744d] bg-[linear-gradient(105deg,#4b150f,#7e1f16_64%,#53150e)] px-9 py-7 shadow-[0_12px_35px_rgba(0,0,0,.4)] max-md:px-6 max-sm:mt-6 max-sm:w-[calc(100%-30px)] max-sm:p-5"
      id="reservation"
    >
      <div className="flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-stretch">
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
      <form
        className="mt-7 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(155px,1.05fr)]"
        noValidate
        onSubmit={handleSubmit}
      >
        <Field error={errors.partySize} id="party-size" label="Party size">
          <input
            aria-describedby={errors.partySize ? "party-size-error" : undefined}
            aria-invalid={Boolean(errors.partySize)}
            className={inputClass(errors.partySize)}
            id="party-size"
            inputMode="numeric"
            name="partySize"
            placeholder="2 Guests"
            type="text"
            value={partySize}
            onChange={(event) => {
              const value = event.target.value.replace(/\D/g, "");
              setPartySize(value);
              updateError("partySize", validatePartySize(value));
            }}
          />
        </Field>
        <Field error={errors.date} id="reservation-date" label="Date">
          <input
            aria-describedby={
              errors.date ? "reservation-date-error" : undefined
            }
            aria-invalid={Boolean(errors.date)}
            className={inputClass(errors.date)}
            id="reservation-date"
            min={today}
            name="date"
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
              updateError("date", validateDate(event.target.value));
            }}
          />
        </Field>
        <Field error={errors.time} id="reservation-time" label="Time">
          <select
            aria-describedby={
              errors.time ? "reservation-time-error" : undefined
            }
            aria-invalid={Boolean(errors.time)}
            className={inputClass(errors.time)}
            id="reservation-time"
            name="time"
            value={time}
            onChange={(event) => {
              setTime(event.target.value);
              updateError(
                "time",
                event.target.value ? "" : "Select a reservation time.",
              );
            }}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>
        <Field
          error={errors.seatingZone}
          id="seating-zone"
          label="Seating zone"
        >
          <select
            aria-describedby={
              errors.seatingZone ? "seating-zone-error" : undefined
            }
            aria-invalid={Boolean(errors.seatingZone)}
            className={inputClass(errors.seatingZone)}
            id="seating-zone"
            name="seatingZone"
            value={seatingZone}
            onChange={(event) => {
              setSeatingZone(event.target.value);
              updateError(
                "seatingZone",
                event.target.value ? "" : "Select a seating zone.",
              );
            }}
          >
            <option value="">Select a zone</option>
            {seatingZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </Field>
        <button
          className="inline-flex h-12 w-full items-center justify-center gap-7.5 self-end rounded-sm border-0 bg-cheddar px-5 font-display text-base font-extrabold uppercase tracking-[.4px] text-[#181615] shadow-[0_4px_10px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5 sm:col-span-2 lg:col-span-1"
          type="submit"
          onClick={() => setIsConfirmed(true)}
        >
          Find table <span>→</span>
        </button>
      </form>
      {isConfirmed && (
        <div
          aria-labelledby="reservation-confirmation-title"
          aria-modal="true"
          className={`reservation-modal fixed inset-0 z-20 flex items-center justify-center bg-black/70 px-5 ${isConfirmationClosing ? "reservation-modal--closing" : ""}`}
          role="dialog"
        >
          <div className="reservation-modal__card w-full max-w-sm rounded-[7px] border border-[#ffc6744d] bg-[#4b150f] p-7 text-center shadow-[0_12px_35px_rgba(0,0,0,.55)]">
            <h3
              className="font-display text-3xl font-extrabold uppercase text-[#f6eee4]"
              id="reservation-confirmation-title"
            >
              You Reserved the Table
            </h3>
            <button
              ref={okButtonRef}
              className="mt-5 rounded-sm border-0 bg-cheddar px-8 py-2.5 font-display font-extrabold uppercase text-[#181615]"
              type="button"
              onClick={closeConfirmation}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
