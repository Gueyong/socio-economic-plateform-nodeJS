import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewsServiceBase } from "./base/reviews.service.base";

@Injectable()
export class ReviewsService extends ReviewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
