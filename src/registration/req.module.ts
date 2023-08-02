import { Module } from '@nestjs/common';
import { RegService } from './reg.service';
import { UsersModule } from 'src/users/user.module';
import { RegController } from './reg.controller';
import { jwtConstants } from 'src/profile/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true, 
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '2h' }
        })
    ],
    providers: [RegService],
    controllers: [RegController]
})
export class RegModule {}