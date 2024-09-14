export function getFormattedDate(date: string): string {
  // Handle Date formatting
  const isoDate = date;
  const dateObj = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate: string = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
}
