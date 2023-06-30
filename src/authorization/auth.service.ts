import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        const isMatch = await bcrypt.compare(user.password, pass);
        
        if(!isMatch) {
            throw new UnauthorizedException();
        }

        const payload = { email: user.email, isActivate: false} 

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}