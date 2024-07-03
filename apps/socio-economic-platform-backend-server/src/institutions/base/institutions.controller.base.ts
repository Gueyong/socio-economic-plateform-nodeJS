/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InstitutionsService } from "../institutions.service";
import { InstitutionsCreateInput } from "./InstitutionsCreateInput";
import { Institutions } from "./Institutions";
import { InstitutionsFindManyArgs } from "./InstitutionsFindManyArgs";
import { InstitutionsWhereUniqueInput } from "./InstitutionsWhereUniqueInput";
import { InstitutionsUpdateInput } from "./InstitutionsUpdateInput";

export class InstitutionsControllerBase {
  constructor(protected readonly service: InstitutionsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Institutions })
  async createInstitutions(
    @common.Body() data: InstitutionsCreateInput
  ): Promise<Institutions> {
    return await this.service.createInstitutions({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Institutions] })
  @ApiNestedQuery(InstitutionsFindManyArgs)
  async institutionsItems(
    @common.Req() request: Request
  ): Promise<Institutions[]> {
    const args = plainToClass(InstitutionsFindManyArgs, request.query);
    return this.service.institutionsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Institutions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async institutions(
    @common.Param() params: InstitutionsWhereUniqueInput
  ): Promise<Institutions | null> {
    const result = await this.service.institutions({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Institutions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInstitutions(
    @common.Param() params: InstitutionsWhereUniqueInput,
    @common.Body() data: InstitutionsUpdateInput
  ): Promise<Institutions | null> {
    try {
      return await this.service.updateInstitutions({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Institutions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInstitutions(
    @common.Param() params: InstitutionsWhereUniqueInput
  ): Promise<Institutions | null> {
    try {
      return await this.service.deleteInstitutions({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
