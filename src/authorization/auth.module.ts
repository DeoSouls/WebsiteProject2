import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/user.module';
import { AuthController } from './auth.controller';
import { jwtConstants } from '../profile/constants'; 
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
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}