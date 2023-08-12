import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/user.module';
import { jwtConstants } from '../profile/constants'; 
import { JwtModule } from '@nestjs/jwt';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

@Module({
    imports: [
        UsersModule,
    ],
    providers: [ProfileService],
    controllers: [ProfileController]
})

export class ProfileModule {}