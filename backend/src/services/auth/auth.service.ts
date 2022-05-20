import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from 'src/entitys/clients';
import { DatosLogin } from 'src/models/login.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Clients)
    private clientRepository: Repository<Clients>){}

    helloAuth(){
        return 'hola login';
    }

    async Login(Datos: DatosLogin){
      return await this.clientRepository.findOne({
          where:[
              {Email: Datos.User},
              {UserName: Datos.User}
          ]
      })
    }

}
