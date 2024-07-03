import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketTrendsService } from "./marketTrends.service";
import { MarketTrendsControllerBase } from "./base/marketTrends.controller.base";

@swagger.ApiTags("marketTrends")
@common.Controller("marketTrends")
export class MarketTrendsController extends MarketTrendsControllerBase {
  constructor(protected readonly service: MarketTrendsService) {
    super(service);
  }
}
