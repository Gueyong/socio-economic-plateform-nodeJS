import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShopsService } from "./shops.service";
import { ShopsControllerBase } from "./base/shops.controller.base";

@swagger.ApiTags("shops")
@common.Controller("shops")
export class ShopsController extends ShopsControllerBase {
  constructor(protected readonly service: ShopsService) {
    super(service);
  }
}
