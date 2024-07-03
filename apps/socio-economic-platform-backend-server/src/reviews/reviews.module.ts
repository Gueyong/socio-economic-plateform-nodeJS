import { Module } from "@nestjs/common";
import { ReviewsModuleBase } from "./base/reviews.module.base";
import { ReviewsService } from "./reviews.service";
import { ReviewsController } from "./reviews.controller";
import { ReviewsResolver } from "./reviews.resolver";

@Module({
  imports: [ReviewsModuleBase],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewsResolver],
  exports: [ReviewsService],
})
export class ReviewsModule {}
