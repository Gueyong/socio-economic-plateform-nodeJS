import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobOpportunitiesService } from "./jobOpportunities.service";
import { JobOpportunitiesControllerBase } from "./base/jobOpportunities.controller.base";

@swagger.ApiTags("jobOpportunities")
@common.Controller("jobOpportunities")
export class JobOpportunitiesController extends JobOpportunitiesControllerBase {
  constructor(protected readonly service: JobOpportunitiesService) {
    super(service);
  }
}
