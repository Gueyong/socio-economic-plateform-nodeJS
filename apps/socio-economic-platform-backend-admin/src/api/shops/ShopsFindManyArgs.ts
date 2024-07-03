import { ShopsWhereInput } from "./ShopsWhereInput";
import { ShopsOrderByInput } from "./ShopsOrderByInput";

export type ShopsFindManyArgs = {
  where?: ShopsWhereInput;
  orderBy?: Array<ShopsOrderByInput>;
  skip?: number;
  take?: number;
};
