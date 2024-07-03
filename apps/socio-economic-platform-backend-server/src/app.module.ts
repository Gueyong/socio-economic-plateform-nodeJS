import { Module } from "@nestjs/common";
import { ShopsModule } from "./shops/shops.module";
import { GoodsModule } from "./goods/goods.module";
import { BookingsModule } from "./bookings/bookings.module";
import { JobOpportunitiesModule } from "./jobOpportunities/jobOpportunities.module";
import { InstitutionsModule } from "./institutions/institutions.module";
import { RatingsModule } from "./ratings/ratings.module";
import { FreelancerServicesModule } from "./freelancerServices/freelancerServices.module";
import { MarketTrendsModule } from "./marketTrends/marketTrends.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ShopsModule,
    GoodsModule,
    BookingsModule,
    JobOpportunitiesModule,
    InstitutionsModule,
    RatingsModule,
    FreelancerServicesModule,
    MarketTrendsModule,
    ReviewsModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
