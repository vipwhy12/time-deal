import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './sale.entity';
import { SaleRepository } from './sale.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SalesService, SaleRepository],
  exports: [SalesService, SaleRepository],
})
export class SalesModule {}
