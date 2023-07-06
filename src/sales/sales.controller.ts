import { Controller,Get, Param } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from './sale.entity';
import { Brand } from 'src/brands/brand.entity';

@Controller('sales')
export class SalesController {

  constructor(private readonly saleService : SalesService){}

  @Get()
  getAll(): Promise<Sale[]>{
    return this.saleService.getAll();
  }

  @Get("/rank")
  getTopBrand(): Promise<Sale[]>{
    return this.saleService.getTopBrand();
  }

  @Get("brands/:id")
  getBrandSales(@Param('id') brandId: number): Promise<Sale[]>{
    return this.saleService.getBrandSales(brandId);
  }

}
