import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookingsService } from "./bookings.service";
import { BookingsControllerBase } from "./base/bookings.controller.base";

@swagger.ApiTags("bookings")
@common.Controller("bookings")
export class BookingsController extends BookingsControllerBase {
  constructor(protected readonly service: BookingsService) {
    super(service);
  }
}
