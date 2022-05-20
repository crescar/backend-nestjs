import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from 'src/entitys/clients';


@Injectable()
export class RegistroService {

    constructor(@InjectRepository(Clients)
    private clientRepository: Repository<Clients>){}

    helloRegistro(){
        return 'Hola registro'
    }

    async register(Datos: any){
        try {
            const vDatos = await this.clientRepository.findOne({where:[
                {Email: Datos.Email},
                {UserName: Datos.UserName}
            ]})
            if (vDatos) {
                return {mensaje: "correo y/o usuario en uso"}
            }else{
                await this.clientRepository.save(Datos)
                return {mensaje: "Registro Exitos"}
            }

        } catch (error) {
            return {mensaje: "Ocurrio un error"}
        }
        
    }
}
