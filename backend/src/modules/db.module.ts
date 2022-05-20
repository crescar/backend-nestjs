import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from 'src/entitys/clients';
import { ClientsModule } from './clients.module';
import { LoginModule } from './login.module';
import { TrainingModule } from './training.module';
import { Training } from 'src/entitys/training';


@Module({
    imports:[
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host: 'localhost',
                port:3306,
                username:'root',
                password:'',
                database:'gym-app',
                entities:[Clients, Training],
                synchronize:true

            }
        ),ClientsModule, LoginModule,TrainingModule
        
    ]
})
export class DbModule {}
