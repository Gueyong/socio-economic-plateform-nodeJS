import { Module } from "@nestjs/common";
import { ShopsModuleBase } from "./base/shops.module.base";
import { ShopsService } from "./shops.service";
import { ShopsController } from "./shops.controller";
import { ShopsResolver } from "./shops.resolver";

@Module({
  imports: [ShopsModuleBase],
  controllers: [ShopsController],
  providers: [ShopsService, ShopsResolver],
  exports: [ShopsService],
})
export class ShopsModule {}
