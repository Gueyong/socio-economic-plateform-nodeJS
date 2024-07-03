import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookingsServiceBase } from "./base/bookings.service.base";

@Injectable()
export class BookingsService extends BookingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
