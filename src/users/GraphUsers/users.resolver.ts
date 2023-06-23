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
    async user(@Args('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Query(returns => Users)
    async removeuser(@Args('id') id: number) {
        return this.usersService.remove(id);
    }

    @Query(returns => Users)
    async adduser(@Args('id') id: number, @Args('firstname') firstname: string, @Args('lastname') lastname: string, @Args('isActive') isActive: boolean) {
        return this.usersService.addUser(id, firstname, lastname, isActive);
    }
}
