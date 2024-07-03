import { Goods as TGoods } from "../api/goods/Goods";

export const GOODS_TITLE_FIELD = "id";

export const GoodsTitle = (record: TGoods): string => {
  return record.id?.toString() || String(record.id);
};
