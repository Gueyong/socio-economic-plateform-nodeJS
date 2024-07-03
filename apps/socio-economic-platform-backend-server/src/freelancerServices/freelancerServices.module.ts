import { Module } from "@nestjs/common";
import { FreelancerServicesModuleBase } from "./base/freelancerServices.module.base";
import { FreelancerServicesService } from "./freelancerServices.service";
import { FreelancerServicesController } from "./freelancerServices.controller";
import { FreelancerServicesResolver } from "./freelancerServices.resolver";

@Module({
  imports: [FreelancerServicesModuleBase],
  controllers: [FreelancerServicesController],
  providers: [FreelancerServicesService, FreelancerServicesResolver],
  exports: [FreelancerServicesService],
})
export class FreelancerServicesModule {}
