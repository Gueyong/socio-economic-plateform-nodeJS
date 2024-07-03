import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreelancerServicesService } from "./freelancerServices.service";
import { FreelancerServicesControllerBase } from "./base/freelancerServices.controller.base";

@swagger.ApiTags("freelancerServices")
@common.Controller("freelancerServices")
export class FreelancerServicesController extends FreelancerServicesControllerBase {
  constructor(protected readonly service: FreelancerServicesService) {
    super(service);
  }
}
