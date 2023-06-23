import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.model';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post()
    getUserOne(@Body() id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post('/remove')
    removeUser(@Body() id: number): Promise<void> {
        return this.usersService.remove(id);
    }

    @Post('/add')
    addUser(@Body() id: number, firstname: string, lastname: string, isActive: boolean): Promise<User> {
        return this.usersService.addUser(id, firstname, lastname, isActive);
    }
}