export function getDaysInMonth(year, month) {
  const date = new Date(year, month - 1, 1);
  const days = [];

  while (date.getMonth() === month - 1) {
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = String(date.getDate()).padStart(2, "0");
    const fullDate = `${year}-${String(month).padStart(2, "0")}-${day}`;

    days.push({
      dayName,
      date: fullDate,
    });

    date.setDate(date.getDate() + 1);
  }

  return days;
}
