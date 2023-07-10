import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './users/GraphUsers/users.module';
import { RegModule } from './registration/req.module';
import { AuthModule } from './authorization/auth.module';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Sa11281215',
      database: 'store_data',
      autoLoadModels: true,
      synchronize: true
    }), UsersModule, RegModule, AuthModule,
    UserModule, GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      include: [UserModule],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ]
})
export class AppModule {}
