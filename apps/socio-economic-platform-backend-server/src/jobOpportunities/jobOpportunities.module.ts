import { Module } from "@nestjs/common";
import { JobOpportunitiesModuleBase } from "./base/jobOpportunities.module.base";
import { JobOpportunitiesService } from "./jobOpportunities.service";
import { JobOpportunitiesController } from "./jobOpportunities.controller";
import { JobOpportunitiesResolver } from "./jobOpportunities.resolver";

@Module({
  imports: [JobOpportunitiesModuleBase],
  controllers: [JobOpportunitiesController],
  providers: [JobOpportunitiesService, JobOpportunitiesResolver],
  exports: [JobOpportunitiesService],
})
export class JobOpportunitiesModule {}
