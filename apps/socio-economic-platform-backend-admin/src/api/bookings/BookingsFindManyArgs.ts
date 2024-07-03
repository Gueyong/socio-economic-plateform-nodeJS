import { BookingsWhereInput } from "./BookingsWhereInput";
import { BookingsOrderByInput } from "./BookingsOrderByInput";

export type BookingsFindManyArgs = {
  where?: BookingsWhereInput;
  orderBy?: Array<BookingsOrderByInput>;
  skip?: number;
  take?: number;
};
