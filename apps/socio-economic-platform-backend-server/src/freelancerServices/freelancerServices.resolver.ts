import * as graphql from "@nestjs/graphql";
import { FreelancerServicesResolverBase } from "./base/freelancerServices.resolver.base";
import { FreelancerServices } from "./base/FreelancerServices";
import { FreelancerServicesService } from "./freelancerServices.service";

@graphql.Resolver(() => FreelancerServices)
export class FreelancerServicesResolver extends FreelancerServicesResolverBase {
  constructor(protected readonly service: FreelancerServicesService) {
    super(service);
  }
}
