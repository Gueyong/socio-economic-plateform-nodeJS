import * as graphql from "@nestjs/graphql";
import { InstitutionsResolverBase } from "./base/institutions.resolver.base";
import { Institutions } from "./base/Institutions";
import { InstitutionsService } from "./institutions.service";

@graphql.Resolver(() => Institutions)
export class InstitutionsResolver extends InstitutionsResolverBase {
  constructor(protected readonly service: InstitutionsService) {
    super(service);
  }
}
