import { Shops as TShops } from "../api/shops/Shops";

export const SHOPS_TITLE_FIELD = "id";

export const ShopsTitle = (record: TShops): string => {
  return record.id?.toString() || String(record.id);
};
