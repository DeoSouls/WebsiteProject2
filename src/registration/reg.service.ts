import { Injectable, Res } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import axios from 'axios';

@Injectable()
export class RegService {
    constructor(private usersService: UsersService) {}

    async Registration(firstname: string, lastname: string, email: string, gender: string, password: string, captcha: string): Promise<any> {

        const { data } = await axios.post("https://www.google.com/recaptcha/api/siteverify", { 
            secret: "6Le0sdYmAAAAABiCc6wsrfhnfZIj7aVNjayA9CdI", 
            response: captcha 
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }, 
            withCredentials: true
        });

        console.log(data);

        const userValidate = await this.usersService.findOne(email);
        if(userValidate) {
            throw new Error(`user under this ${email} is created`)
        }

        const hash_pass = await bcrypt.hash(password, 8);

        const user = await this.usersService.addUser(firstname, lastname, email, gender, hash_pass, false);

        return user;
    }
}