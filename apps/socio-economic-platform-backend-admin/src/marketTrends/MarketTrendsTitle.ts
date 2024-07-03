import { MarketTrends as TMarketTrends } from "../api/marketTrends/MarketTrends";

export const MARKETTRENDS_TITLE_FIELD = "id";

export const MarketTrendsTitle = (record: TMarketTrends): string => {
  return record.id?.toString() || String(record.id);
};
