import { Reviews as TReviews } from "../api/reviews/Reviews";

export const REVIEWS_TITLE_FIELD = "id";

export const ReviewsTitle = (record: TReviews): string => {
  return record.id?.toString() || String(record.id);
};
