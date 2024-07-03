import { GoodsWhereInput } from "./GoodsWhereInput";
import { GoodsOrderByInput } from "./GoodsOrderByInput";

export type GoodsFindManyArgs = {
  where?: GoodsWhereInput;
  orderBy?: Array<GoodsOrderByInput>;
  skip?: number;
  take?: number;
};
