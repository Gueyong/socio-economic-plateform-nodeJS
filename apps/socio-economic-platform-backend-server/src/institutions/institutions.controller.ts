import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstitutionsService } from "./institutions.service";
import { InstitutionsControllerBase } from "./base/institutions.controller.base";

@swagger.ApiTags("institutions")
@common.Controller("institutions")
export class InstitutionsController extends InstitutionsControllerBase {
  constructor(protected readonly service: InstitutionsService) {
    super(service);
  }
}
