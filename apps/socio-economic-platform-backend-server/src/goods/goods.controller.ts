import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoodsService } from "./goods.service";
import { GoodsControllerBase } from "./base/goods.controller.base";

@swagger.ApiTags("goods")
@common.Controller("goods")
export class GoodsController extends GoodsControllerBase {
  constructor(protected readonly service: GoodsService) {
    super(service);
  }
}
