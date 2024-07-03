import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelancerServicesServiceBase } from "./base/freelancerServices.service.base";

@Injectable()
export class FreelancerServicesService extends FreelancerServicesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
