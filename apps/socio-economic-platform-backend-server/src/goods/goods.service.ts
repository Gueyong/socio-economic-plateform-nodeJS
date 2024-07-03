import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoodsServiceBase } from "./base/goods.service.base";

@Injectable()
export class GoodsService extends GoodsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
