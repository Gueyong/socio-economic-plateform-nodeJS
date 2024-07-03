import { Module } from "@nestjs/common";
import { BookingsModuleBase } from "./base/bookings.module.base";
import { BookingsService } from "./bookings.service";
import { BookingsController } from "./bookings.controller";
import { BookingsResolver } from "./bookings.resolver";

@Module({
  imports: [BookingsModuleBase],
  controllers: [BookingsController],
  providers: [BookingsService, BookingsResolver],
  exports: [BookingsService],
})
export class BookingsModule {}
