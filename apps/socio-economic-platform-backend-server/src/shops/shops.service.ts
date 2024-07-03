import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShopsServiceBase } from "./base/shops.service.base";

@Injectable()
export class ShopsService extends ShopsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
