import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users {
    @Field(type => Int)
    id: number;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    email: string;

    @Field()
    gender: string;

    @Field()
    password: string;

    @Field()
    isActive: boolean;
}