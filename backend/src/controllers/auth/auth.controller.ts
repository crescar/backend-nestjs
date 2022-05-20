import { Body, Controller, Get, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryp from 'bcrypt'
import { Response } from 'src/models/response';

import { AuthService } from 'src/services/auth/auth.service';
import { DatosLogin } from 'src/models/login.dto';

@Controller('login')
export class AuthController {
    constructor(
        private readonly authservices: AuthService,
        private jwt: JwtService
    ){}

    @Get()
    Auth(){
        return this.authservices.helloAuth()
    }

    @Post()
   async Login( @Body() Datos:DatosLogin){
        const sendDatos:DatosLogin = Datos;//new DatosLogin()
        const login = await this.authservices.Login(sendDatos)
        const hash = bcryp.compareSync(sendDatos.Pass, login.Pass)
        let data: Response = new Response();
        data.code = 200;
        if (hash) {
            const token = await this.jwt.signAsync({UserID: login.UserID, UserName: login.UserName})
            data.success = true;
            data.message = "Login Success";
            data.data = token;
            return data;
        }else{
            data.success = false;
            data.message = "User Or password invalid";
            data.data = null;
            return data;
        }
    }
}
