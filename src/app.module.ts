import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
