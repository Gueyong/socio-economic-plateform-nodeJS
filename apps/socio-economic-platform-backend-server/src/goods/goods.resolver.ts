import * as graphql from "@nestjs/graphql";
import { GoodsResolverBase } from "./base/goods.resolver.base";
import { Goods } from "./base/Goods";
import { GoodsService } from "./goods.service";

@graphql.Resolver(() => Goods)
export class GoodsResolver extends GoodsResolverBase {
  constructor(protected readonly service: GoodsService) {
    super(service);
  }
}
