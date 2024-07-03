import { Module } from "@nestjs/common";
import { RatingsModuleBase } from "./base/ratings.module.base";
import { RatingsService } from "./ratings.service";
import { RatingsController } from "./ratings.controller";
import { RatingsResolver } from "./ratings.resolver";

@Module({
  imports: [RatingsModuleBase],
  controllers: [RatingsController],
  providers: [RatingsService, RatingsResolver],
  exports: [RatingsService],
})
export class RatingsModule {}
