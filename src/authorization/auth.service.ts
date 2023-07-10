import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);

        if(user['dataValues'] === undefined) {
            throw new UnauthorizedException("User not found");
        }

        const isMatch = await bcrypt.compareSync(pass, user['dataValues']['password']);

        if(!isMatch) {
            throw new UnauthorizedException("Wrong password");
        }

        const payload = { email: user.email, isActivate: false} 

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}