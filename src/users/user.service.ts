import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

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

    async addUser(firstname: string, lastname: string, email: string, gender: string, password: string, isActive: boolean): Promise<User> {
      const user = await this.userModel.create({ firstname: firstname, lastname: lastname, email: email, gender: gender, password: password,  isActive: isActive });
      return user;
    }
    
    async remove(email: string): Promise<void> {
        const user = await this.findOne(email);
        await user.destroy();
    }
}