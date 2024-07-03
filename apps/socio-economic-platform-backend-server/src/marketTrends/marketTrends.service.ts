import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketTrendsServiceBase } from "./base/marketTrends.service.base";

@Injectable()
export class MarketTrendsService extends MarketTrendsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
