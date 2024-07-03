import { MarketTrendsWhereInput } from "./MarketTrendsWhereInput";
import { MarketTrendsOrderByInput } from "./MarketTrendsOrderByInput";

export type MarketTrendsFindManyArgs = {
  where?: MarketTrendsWhereInput;
  orderBy?: Array<MarketTrendsOrderByInput>;
  skip?: number;
  take?: number;
};
