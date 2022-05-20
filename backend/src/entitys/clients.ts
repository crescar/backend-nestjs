import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients {

    @PrimaryGeneratedColumn()
    UserID: number

    @Column({unique:true})
    UserName: string

    @Column({unique:true})
    Email: string

    @Column()
    Name: string

    @Column()
    LastName:string

    @Column()
    Pass: string

    @Column()
    Age: number

    @Column()
    ExpireDate: Date

    @Column({ default: true})
    Status: boolean

}
