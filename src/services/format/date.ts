const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export function getMonthAndYear(date: string) {
  const dateValue = new Date(date);
  return monthNames[dateValue.getMonth()] + ', ' + dateValue.getFullYear();
}

export function getMonthFromDate(date: string) {
  const dateValue = new Date(date);
  return monthNames[dateValue.getMonth()];
}

export function getNumDaysBetweenToday(date: string) {
  debugger;
  const dateValue = new Date(date),
    today = new Date();
  const diff = Math.abs(today.getTime() - dateValue.getTime());
  const total = diff / (1000 * 60 * 60 * 24);
  return total;
}
