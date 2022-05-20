import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Training {

    @PrimaryGeneratedColumn({type:'int'})
    IDTraining: number

    @Column({type: 'int', nullable: false})
    UserID: number

    @Column({type:'varchar', nullable: false})
    UserName: string

    @Column({type: 'varchar', nullable: false})
    Training: string

    @Column({type: 'text', nullable: false})
    Routine: string

    @Column({type:'varchar'})
    ImgUrl: string

    @Column({type: 'boolean', default: false})
    End: boolean

}
