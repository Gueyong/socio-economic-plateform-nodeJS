import * as graphql from "@nestjs/graphql";
import { ReviewsResolverBase } from "./base/reviews.resolver.base";
import { Reviews } from "./base/Reviews";
import { ReviewsService } from "./reviews.service";

@graphql.Resolver(() => Reviews)
export class ReviewsResolver extends ReviewsResolverBase {
  constructor(protected readonly service: ReviewsService) {
    super(service);
  }
}
