import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstitutionsServiceBase } from "./base/institutions.service.base";

@Injectable()
export class InstitutionsService extends InstitutionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
