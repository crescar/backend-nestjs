import { Module } from '@nestjs/common';

import { ControllersModule } from './modules/controllers.module';






@Module({
  imports: [ControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
