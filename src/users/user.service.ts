import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: number): Promise<User> {
        return this.userModel.findOne({
          where: {
            id,
          },
        });
    }

    async addUser(id: number, firstname: string, lastname: string, isActive: boolean): Promise<User> {
      const user = await this.userModel.create({ id: id, firstname: firstname, lastname: lastname, isActive: isActive });
      return user;
    }
    
    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}