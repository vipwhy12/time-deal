import { Body, Controller, Get, Logger, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from './sale.entity';

@Controller('sales')
export class SalesController {
  private logger = new Logger('SalesController');
  constructor(private readonly saleService: SalesService) { }

  @Get()
  getAll(): Promise<Sale[]> {
    this.logger.verbose(`✨trying to get all Sale`);
    return this.saleService.getAll();
  }

  @Get('brands')
  getBrandSalesList(): Promise<Sale[]> {
    this.logger.verbose(`✨trying to get all Sale`);
    return this.saleService.getBrandSalesList();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<Sale> {
    this.logger.verbose(`✨trying to get Sale by ${id}`);
    return this.saleService.getById(id);
  }

  @Get('rank/:limit')
  getTopBrand(@Param('limit', ParseIntPipe) limit: number): Promise<Sale[]> {
    this.logger.verbose(`✨trying to get ${limit} rank`);
    return this.saleService.getTopBrand(limit);
  }

  @Get('brands/:id')
  getBrandSales(@Param('id', ParseIntPipe) brandId: number): Promise<Sale[]> {
    this.logger.verbose(`✨trying to get  `);
    return this.saleService.getBrandSales(brandId);
  }

  @Patch(':id/salesCount')
  updateSalesCount(
    @Param('id', ParseIntPipe) id: number,
    @Body('salesCount', ParseIntPipe) salesCount: number,
  ) {
    return this.saleService.updateSalesCount(id, salesCount);
  }
}
