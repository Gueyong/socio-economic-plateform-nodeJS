import { Ratings as TRatings } from "../api/ratings/Ratings";

export const RATINGS_TITLE_FIELD = "id";

export const RatingsTitle = (record: TRatings): string => {
  return record.id?.toString() || String(record.id);
};
