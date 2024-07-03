import { ReviewsWhereInput } from "./ReviewsWhereInput";
import { ReviewsOrderByInput } from "./ReviewsOrderByInput";

export type ReviewsFindManyArgs = {
  where?: ReviewsWhereInput;
  orderBy?: Array<ReviewsOrderByInput>;
  skip?: number;
  take?: number;
};
