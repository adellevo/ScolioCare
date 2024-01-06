import { format } from "date-fns";

export const getSessionLabel = (session: { startTime: string; endTime: string }) => {
  const startTime = format(session.startTime, "H:mm a");
  const endTime = format(session.endTime, "H:mm a");

  return `${startTime} - ${endTime}`;
};

// Calculate session duration from session start/end time
export const getSessionDuration = (startDate: string, endDate: string) => {
  const startHours = Number(format(startDate, "H"));
  const startMinutes = Number(format(startDate, "m"));
  const endHours = Number(format(endDate, "H"));
  const endMinutes = Number(format(endDate, "m"));
  const totalHours = endHours - startHours;
  const totalMinutes = Math.abs(endMinutes - startMinutes);

  return `${totalHours}h ${totalMinutes}m`;
};
