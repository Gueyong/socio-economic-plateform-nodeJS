import * as graphql from "@nestjs/graphql";
import { MarketTrendsResolverBase } from "./base/marketTrends.resolver.base";
import { MarketTrends } from "./base/MarketTrends";
import { MarketTrendsService } from "./marketTrends.service";

@graphql.Resolver(() => MarketTrends)
export class MarketTrendsResolver extends MarketTrendsResolverBase {
  constructor(protected readonly service: MarketTrendsService) {
    super(service);
  }
}
