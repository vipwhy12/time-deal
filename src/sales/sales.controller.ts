import { Controller,Get } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from './sale.entity';

@Controller('sales')
export class SalesController {

  constructor(private readonly saleService : SalesService){}

  @Get()
  getAll(): Promise<Sale[]>{
    return this.saleService.getAll();
  }

}
