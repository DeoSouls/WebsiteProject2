import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Phone } from './phone.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User, @InjectModel(Phone) private phoneModel: typeof Phone) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(email: string): Promise<User> {
      return this.userModel.findOne({
        where: {
          email,
        },
      });
    }

    findOnePhone(id: number): Promise<Phone> {
      return this.phoneModel.findOne({
        where: {
          id
        }
      });
    }

    async addUser(firstname: string, lastname: string, email: string, gender: string, password: string, isActive: boolean): Promise<User> {
      const user = await this.userModel.create({ firstname: firstname, lastname: lastname, email: email, gender: gender, password: password, dateofbirth: null, country: null, timezone: null, isActive: isActive });
      return user;
    }
    
    async remove(email: string): Promise<void> {
        const user = await this.findOne(email);
        await user.destroy();
    }

    async update(firstname: string, lastname: string, email: string, wmessage: string, dateofbirth: string, country: string, avatar: string, timezone: string) {
      const user = await this.findOne(email);
      const data = await user.update({firstname: firstname, lastname: lastname, wmessage: wmessage, dateofbirth: dateofbirth, country: country, avatar: avatar, timezone: timezone})
      return data;
    }

    async updateEmail(curmail: string, newmail: string) {
      const user = await this.findOne(curmail);
      const mail = await user.update({email: newmail});
      return mail;
    }

    async updatePass(email: string, newpass: Promise<string>) {
      const user = await this.findOne(email);
      newpass.then(async res => await user.update({password: res}))
    }

    async addPhoneNumber(email: string, phone: string) {
      const user = await this.findOne(email);
      const phone_record = await this.phoneModel.create({number: phone, userId: user.id})
      return phone_record;
    }
}