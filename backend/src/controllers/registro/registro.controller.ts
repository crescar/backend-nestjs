import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegistroService } from 'src/services/registro/registro.service';
import * as bcrypt from 'bcrypt'

@Controller('registro')
export class RegistroController {
    constructor(private readonly registroservice: RegistroService){}
    
    @Get()
    helloRegistro(){
        return this.registroservice.helloRegistro()
    }
    @Post()
    async Register( @Body() Datos:{LastName:string ,Name: string, UserName: string, 
        Email: string, Pass: string, Age: number, ExpireDate: Date } ){
            
            const HashPass = await bcrypt.hashSync(Datos.Pass,12)

            const saveUser = {LastName: Datos.LastName, Name: Datos.Name, UserName: Datos.UserName,
            Email:Datos.Email, Pass: HashPass, Age:Datos.Age, ExpireDate: Datos.ExpireDate }
            
            const registro = await this.registroservice.register(saveUser)
            console.log(registro)
            return registro

    }
}
