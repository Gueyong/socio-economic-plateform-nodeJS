import { Module } from "@nestjs/common";
import { MarketTrendsModuleBase } from "./base/marketTrends.module.base";
import { MarketTrendsService } from "./marketTrends.service";
import { MarketTrendsController } from "./marketTrends.controller";
import { MarketTrendsResolver } from "./marketTrends.resolver";

@Module({
  imports: [MarketTrendsModuleBase],
  controllers: [MarketTrendsController],
  providers: [MarketTrendsService, MarketTrendsResolver],
  exports: [MarketTrendsService],
})
export class MarketTrendsModule {}
