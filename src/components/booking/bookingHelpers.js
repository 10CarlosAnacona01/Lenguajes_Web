export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export function padDate(n) {
  return String(n).padStart(2, "0");
}

export function toDateKey(year, month, day) {
  return `${year}-${padDate(month + 1)}-${padDate(day)}`;
}

export function buildCalendarDays(year, month) {
  const total = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= total; d++) days.push(d);
  return days;
}
