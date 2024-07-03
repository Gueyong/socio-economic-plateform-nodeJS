import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewsService } from "./reviews.service";
import { ReviewsControllerBase } from "./base/reviews.controller.base";

@swagger.ApiTags("reviews")
@common.Controller("reviews")
export class ReviewsController extends ReviewsControllerBase {
  constructor(protected readonly service: ReviewsService) {
    super(service);
  }
}
