import { format } from "date-fns";

export const formatDate = (date?: Date) => {
  if (!date) return "";
  const _date = new Date(date);
  const formattedDate = format(_date, "MMMM d, yyyy");
  return formattedDate;
};
