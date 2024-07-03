import { Bookings as TBookings } from "../api/bookings/Bookings";

export const BOOKINGS_TITLE_FIELD = "id";

export const BookingsTitle = (record: TBookings): string => {
  return record.id?.toString() || String(record.id);
};
