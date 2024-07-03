import * as graphql from "@nestjs/graphql";
import { JobOpportunitiesResolverBase } from "./base/jobOpportunities.resolver.base";
import { JobOpportunities } from "./base/JobOpportunities";
import { JobOpportunitiesService } from "./jobOpportunities.service";

@graphql.Resolver(() => JobOpportunities)
export class JobOpportunitiesResolver extends JobOpportunitiesResolverBase {
  constructor(protected readonly service: JobOpportunitiesService) {
    super(service);
  }
}
