import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobOpportunitiesServiceBase } from "./base/jobOpportunities.service.base";

@Injectable()
export class JobOpportunitiesService extends JobOpportunitiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
