import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.model';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get('/all_usr')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post('/one_usr')
    getUserOne(@Body() email: string): Promise<User> {
        return this.usersService.findOne(email);
    }

    @Post('/remove')
    removeUser(@Body() email: string): Promise<void> {
        return this.usersService.remove(email);
    }

    @Post('/add')
    addUser(@Body() firstname: string, lastname: string, email: string, gender: string, password: string, isActive: boolean): Promise<User> {
        return this.usersService.addUser(firstname, lastname, email, gender, password, isActive);
    }
}