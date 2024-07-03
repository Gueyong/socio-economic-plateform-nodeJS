import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RatingsService } from "./ratings.service";
import { RatingsControllerBase } from "./base/ratings.controller.base";

@swagger.ApiTags("ratings")
@common.Controller("ratings")
export class RatingsController extends RatingsControllerBase {
  constructor(protected readonly service: RatingsService) {
    super(service);
  }
}
