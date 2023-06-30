import { UsersService } from "../user.service";
import { Users } from "./users.model";
import { Resolver, Query, Args } from "@nestjs/graphql";

@Resolver(of => Users)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => [Users])
    async allusers() {
        return this.usersService.findAll();
    }

    @Query(returns => Users)
    async user(@Args('email') email: string) {
        return this.usersService.findOne(email);
    }

    @Query(returns => Users)
    async removeuser(@Args('email') email: string) {
        return this.usersService.remove(email);
    }

    @Query(returns => Users)
    async adduser( @Args('firstname') firstname: string, @Args('lastname') lastname: string,  @Args('email') email: string, @Args('gender') gender: string, @Args('password') password: string, @Args('isActive') isActive: boolean) {
        return this.usersService.addUser(firstname, lastname, email, gender, password,isActive);
    }
}
