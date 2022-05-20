import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrainingService } from 'src/services/training/training.service';

@Controller('training')
export class TrainingController {
    
    constructor( private  trainingServices: TrainingService ){}

    @Get()
    helloTrainig(){
        return this.trainingServices.helloTraining()
    }

    @Post()
    async getTrainings(@Body() Datos:{token:string} ){
        return await this.trainingServices.getTrainings(Datos.token)
    }

    @Post(':id')
    async getTraining(@Body() token:{token: string}, @Param('id') id:string){
        const Datos= {IDTraining: id, token: token.token}
        return await this.trainingServices.getTraining(Datos)
    }
}
