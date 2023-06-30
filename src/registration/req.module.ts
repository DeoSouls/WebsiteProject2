import { Module } from '@nestjs/common';
import { RegService } from './reg.service';
import { UsersModule } from 'src/users/user.module';
import { RegController } from './reg.controller';
import { jwtConstants } from 'src/authorization/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true, 
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '15m' }
        })
    ],
    providers: [RegService],
    controllers: [RegController]
})
export class RegModule {}