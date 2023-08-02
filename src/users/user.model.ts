import { Column, Model, Table, DataType, HasOne } from 'sequelize-typescript';
import { Phone } from './phone.model';

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

    @Column({allowNull: true})
    wmessage?: string;

    @Column({allowNull: true})
    dateofbirth?: string;

    @Column({allowNull: true})
    country?: string;
    
    @Column(DataType.TEXT)
    avatar?: string;

    @Column({allowNull: true})
    timezone?: string;

    @Column({ defaultValue: true})
    isActive: boolean;

    @HasOne(() => Phone)
    phone: Phone;
}