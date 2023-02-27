export default function getWeekDay(date) {
  const options = { weekday: "short" };
  let day = new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  return day.toUpperCase();
}
