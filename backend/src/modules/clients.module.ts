import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistroController } from 'src/controllers/registro/registro.controller';
import { RegistroService } from 'src/services/registro/registro.service';
import { Clients } from 'src/entitys/clients';



@Module({
    imports:[TypeOrmModule.forFeature([Clients])],
    controllers:[RegistroController],
    providers:[RegistroService]
})
export class ClientsModule {}
