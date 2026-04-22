import React, { useState, useCallback } from "react";
import { MONTHS, INITIAL_BOOKED_MAP } from "../../data/booking.js";
import { toDateKey } from "./bookingHelpers.js";
import CalendarView from "./CalendarView.jsx";
import BookingFormView from "./BookingFormView.jsx";
import SuccessView from "./SuccessView.jsx";

function showToast(message, status = "primary") {
  if (typeof window.UIkit !== "undefined" && window.UIkit.notification) {
    window.UIkit.notification({
      message,
      status,
      pos: "bottom-right",
      timeout: 3500,
    });
  }
}

const EMPTY_FORM = { name: "", phone: "", service: "", artist: "" };

export default function BookingApp() {
  const today = new Date();

  /*  Calendario  */
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  /*  Selección  */
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  /*  Slots ocupados  */
  const [bookedSlots, setBookedSlots] = useState(INITIAL_BOOKED_MAP);

  /*  Formulario  */
  const [form, setForm] = useState(EMPTY_FORM);

  /*  Flujo  */
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const todayKey = toDateKey(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  /*  Handlers  */
  function handlePrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }

  function handleNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }

  const handleSelectDay = useCallback(
    (day) => {
      const key = toDateKey(viewYear, viewMonth, day);
      setSelectedDate({ day, month: viewMonth, year: viewYear, key });
      setSelectedSlot(null);
      setStep(2);
    },
    [viewYear, viewMonth],
  );

  function handleFormChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleConfirm() {
    if (!form.name || !form.phone || !form.service || !selectedSlot) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setBookedSlots((prev) => ({
      ...prev,
      [selectedDate.key]: [...(prev[selectedDate.key] || []), selectedSlot],
    }));
    setConfirmation({
      name: form.name,
      date: `${selectedDate.day} de ${MONTHS[selectedDate.month]} ${selectedDate.year}`,
      time: selectedSlot,
      service: form.service,
      artist: form.artist || "Primera disponible",
    });
    setLoading(false);
    setStep(3);
    showToast("¡Cita confirmada! Te llegará un mensaje deWhatsApp pronto.", "primary");
  }

  function handleReset() {
    setStep(1);
    setSelectedDate(null);
    setSelectedSlot(null);
    setForm(EMPTY_FORM);
    setConfirmation(null);
  }

  return (
    <div id="booking-app">
      {step === 1 && (
        <CalendarView
          viewYear={viewYear}
          viewMonth={viewMonth}
          selectedDate={selectedDate}
          bookedSlots={bookedSlots}
          todayKey={todayKey}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onSelectDay={handleSelectDay}
        />
      )}
      {step === 2 && (
        <BookingFormView
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          bookedSlots={bookedSlots}
          form={form}
          loading={loading}
          onBack={() => {
            setStep(1);
            setSelectedSlot(null);
          }}
          onSlotSelect={setSelectedSlot}
          onFormChange={handleFormChange}
          onConfirm={handleConfirm}
        />
      )}
      {step === 3 && (
        <SuccessView confirmation={confirmation} onReset={handleReset} />
      )}
    </div>
  );
}
