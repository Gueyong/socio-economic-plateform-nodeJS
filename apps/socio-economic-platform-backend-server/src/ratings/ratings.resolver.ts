import * as graphql from "@nestjs/graphql";
import { RatingsResolverBase } from "./base/ratings.resolver.base";
import { Ratings } from "./base/Ratings";
import { RatingsService } from "./ratings.service";

@graphql.Resolver(() => Ratings)
export class RatingsResolver extends RatingsResolverBase {
  constructor(protected readonly service: RatingsService) {
    super(service);
  }
}
