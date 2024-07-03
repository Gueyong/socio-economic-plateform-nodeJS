import * as graphql from "@nestjs/graphql";
import { BookingsResolverBase } from "./base/bookings.resolver.base";
import { Bookings } from "./base/Bookings";
import { BookingsService } from "./bookings.service";

@graphql.Resolver(() => Bookings)
export class BookingsResolver extends BookingsResolverBase {
  constructor(protected readonly service: BookingsService) {
    super(service);
  }
}
