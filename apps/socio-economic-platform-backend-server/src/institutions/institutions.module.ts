import { Module } from "@nestjs/common";
import { InstitutionsModuleBase } from "./base/institutions.module.base";
import { InstitutionsService } from "./institutions.service";
import { InstitutionsController } from "./institutions.controller";
import { InstitutionsResolver } from "./institutions.resolver";

@Module({
  imports: [InstitutionsModuleBase],
  controllers: [InstitutionsController],
  providers: [InstitutionsService, InstitutionsResolver],
  exports: [InstitutionsService],
})
export class InstitutionsModule {}
