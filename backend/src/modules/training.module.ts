import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { TrainingController } from 'src/controllers/training/training.controller';
import { TrainingService } from 'src/services/training/training.service';
import { Training } from 'src/entitys/training';

@Module({
    imports:[TypeOrmModule.forFeature([Training]),
        JwtModule.register({
            secret:'PandaGatoChinaPerroJapon1997',
            signOptions:{ expiresIn:'1d' }
        })],
    controllers:[TrainingController],
    providers:[TrainingService]
})
export class TrainingModule {}
