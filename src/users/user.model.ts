import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    email: string;

    @Column
    gender: string;

    @Column
    password: string;

    @Column({ defaultValue: true})
    isActive: boolean;
}