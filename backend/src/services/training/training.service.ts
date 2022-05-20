import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

import { Training } from 'src/entitys/training';

@Injectable()
export class TrainingService {

    constructor(@InjectRepository(Training)
    private trainingRepository: Repository<Training>,
    private jwt: JwtService
    ){}
    
    helloTraining(){
        return 'Hello training'
    }

    async getTrainings(token:string){
        try {
            const auth = await this.jwt.verify(token)
            if (auth) {
                const UserTrainings = await this.trainingRepository.find({where:[
                    {UserID:auth.UserID, UserName: auth.UserName}
                ]})
                console.log(UserTrainings)
                return UserTrainings
            }else{
                return {mensaje:'Token requerido'}
            }
        } catch (error) {
            return {mesaje:`Ocurrio el siguiente error: ${error}`}
        }
        
    }

    async getTraining(Datos){
        try {
            const auth = await this.jwt.verify(Datos.token)
            if (auth) {
                const UserTraining = await this.trainingRepository.findOne({where:[
                    {UserID:auth.UserID, UserName: auth.UserName, IDTraining: Datos.IDTraining}
                ]})
                if (UserTraining) {
                    return UserTraining
                }else{
                    return {mensaje:'No existe la tarea'}
                }
                
            }else{
                return {mensaje:'Token requerido'}
            }
        } catch (error) {
            return {mesaje:`Ocurrio el siguiente error: ${error}`}
        }
        
    }

}
