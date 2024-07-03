import * as graphql from "@nestjs/graphql";
import { ShopsResolverBase } from "./base/shops.resolver.base";
import { Shops } from "./base/Shops";
import { ShopsService } from "./shops.service";

@graphql.Resolver(() => Shops)
export class ShopsResolver extends ShopsResolverBase {
  constructor(protected readonly service: ShopsService) {
    super(service);
  }
}
