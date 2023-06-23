import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column({ defaultValue: true})
    isActive: boolean;
}