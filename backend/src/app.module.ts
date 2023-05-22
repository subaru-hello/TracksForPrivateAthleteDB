import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './greet/hello.module';
import { FirebaseModule } from './firebase/firebase.module';
// import { PbEnvModule } from './config/env/pb-env.module';
// import { PbEnv } from '@pb-config/environments/pb-env.service';
// import { WinstonModule } from 'nest-winston';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
    }),
    // PrismaModule.forRootAsync({
    //   inject: [PbEnv],
    //   isGlobal: true,
    //   useFactory: (env: PbEnv) => ({
    //     prismaOptions: env.PrismaOptionsFactory,
    //   }),
    // }),
    HelloModule,
    FirebaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
