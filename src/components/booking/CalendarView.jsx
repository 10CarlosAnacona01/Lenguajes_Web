import React from "react";
import { MONTHS, DAYS_SHORT, BASE_SLOTS } from "../../data/booking.js";
import { buildCalendarDays, toDateKey } from "./bookingHelpers.js";

export default function CalendarView({
  viewYear,
  viewMonth,
  selectedDate,
  bookedSlots,
  todayKey,
  onPrevMonth,
  onNextMonth,
  onSelectDay,
}) {
  const calDays = buildCalendarDays(viewYear, viewMonth);
  const today = new Date();
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  function getDayClasses(day) {
    const key = toDateKey(viewYear, viewMonth, day);
    const date = new Date(viewYear, viewMonth, day);
    let cls = "cal-day";
    if (date < todayMidnight) cls += " cal-past";
    if (key === todayKey) cls += " cal-today";
    if (selectedDate && selectedDate.key === key) cls += " cal-selected";
    const booked = bookedSlots[key] || [];
    if (
      date >= todayMidnight &&
      booked.length > 0 &&
      booked.length < BASE_SLOTS.length
    )
      cls += " cal-has-slot";
    return cls;
  }

  return (
    <>
      <div className="booking-step">PASO 1 / 2 · Elige una fecha</div>
      <div className="progress-bar">
        <div className="progress-step active"></div>
        <div className="progress-step"></div>
      </div>

      <div className="calendar-header">
        <button className="cal-nav" onClick={onPrevMonth}>
          ‹
        </button>
        <span className="cal-month">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button className="cal-nav" onClick={onNextMonth}>
          ›
        </button>
      </div>

      <div className="calendar-grid">
        {DAYS_SHORT.map((d) => (
          <div key={d} className="cal-day-label">
            {d}
          </div>
        ))}

        {calDays.map((day, idx) => {
          if (!day)
            return <div key={"e" + idx} className="cal-day cal-empty"></div>;
          const key = toDateKey(viewYear, viewMonth, day);
          const date = new Date(viewYear, viewMonth, day);
          return (
            <div
              key={key}
              className={getDayClasses(day)}
              onClick={() => date >= todayMidnight && onSelectDay(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      <p
        style={{
          fontSize: ".72rem",
          color: "rgba(255,255,255,.32)",
          textAlign: "center",
          marginTop: 4,
        }}
      >
        ● Hay disponibilidad · Selecciona un día para continuar
      </p>
    </>
  );
}
