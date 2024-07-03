import { Module } from "@nestjs/common";
import { GoodsModuleBase } from "./base/goods.module.base";
import { GoodsService } from "./goods.service";
import { GoodsController } from "./goods.controller";
import { GoodsResolver } from "./goods.resolver";

@Module({
  imports: [GoodsModuleBase],
  controllers: [GoodsController],
  providers: [GoodsService, GoodsResolver],
  exports: [GoodsService],
})
export class GoodsModule {}
