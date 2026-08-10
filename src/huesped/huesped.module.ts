import { Module } from '@nestjs/common';
import { HuespedService } from './huesped.service';
import { HuespedController } from './huesped.controller';

@Module({
  controllers: [HuespedController],
  providers: [HuespedService],
})
export class HuespedModule {}
