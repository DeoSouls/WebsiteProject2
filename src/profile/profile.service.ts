import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.model';
import { Phone } from 'src/users/phone.model';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfileService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

    saveUserData(firstname: string, lastname: string, email: string, wmessage: string, dateofbirth: string, country: string, avatar: string, timezone: string): Promise<User> {
        const userData = this.userService.update(firstname, lastname, email, wmessage, dateofbirth, country, avatar, timezone);
        return userData;
    }
    
    getUserData(email: string) {
        const userData = this.userService.findOne(email);
        return userData;
    }

    async updateEmail(curmail: string, firstname: string, lastname: string, number: string | null, isActivate: boolean, newmail: string) {
        await this.userService.updateEmail(curmail, newmail);
        const payload = { firstname: firstname, lastname: lastname, number: number, email: newmail, isActivate: isActivate};
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

    async updatePassword(email: string, password: string) {
        const hashpass = bcrypt.hash(password, 7);
        this.userService.updatePass(email, hashpass);
    }

    async addPhoneNumber(email: string,  firstname: string, lastname: string, isActivate: boolean, number: string) {
        const payload = { firstname: firstname, lastname: lastname, email: email, number: number, isActivate: isActivate};
        const phone = await this.userService.addPhoneNumber(email, number);
        return {
            phone: phone,
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}