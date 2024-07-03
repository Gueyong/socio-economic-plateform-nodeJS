import { RatingsWhereInput } from "./RatingsWhereInput";
import { RatingsOrderByInput } from "./RatingsOrderByInput";

export type RatingsFindManyArgs = {
  where?: RatingsWhereInput;
  orderBy?: Array<RatingsOrderByInput>;
  skip?: number;
  take?: number;
};
