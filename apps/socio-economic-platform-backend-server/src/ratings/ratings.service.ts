import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RatingsServiceBase } from "./base/ratings.service.base";

@Injectable()
export class RatingsService extends RatingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
