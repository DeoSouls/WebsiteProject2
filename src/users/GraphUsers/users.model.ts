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
    dateofbirth: string;

    @Field()
    country: string;

    @Field()
    timezone: string;

    @Field()
    isActive: boolean;
}