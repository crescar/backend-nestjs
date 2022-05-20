import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from 'src/services/auth/auth.service';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { Clients } from 'src/entitys/clients';

@Module({
    imports:[TypeOrmModule.forFeature([Clients]), JwtModule.register({
        secret:'PandaGatoChinaPerroJapon1997',
        signOptions:{ expiresIn:'1d' }
    })],
    controllers:[AuthController],
    providers:[AuthService]
})
export class LoginModule {}
