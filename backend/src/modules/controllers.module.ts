import { Module } from '@nestjs/common';

import { DbModule } from './db.module';



@Module({
    imports:[DbModule],
    controllers:[],
    providers:[]

})
export class ControllersModule {}
