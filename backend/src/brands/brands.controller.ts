import { Controller, Body, Get, Param, Post, Logger, ParseIntPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brands')
export class BrandsController {
  private logger = new Logger('BrandsController');
  constructor(private readonly brandsService: BrandsService) { }

  @Get()
  getAll(): Promise<Brand[]> {
    this.logger.verbose(`✨trying to get all Brands`);
    return this.brandsService.getAll();
  }

  @Get('/new')
  getNewBrands() {
    this.logger.verbose(`✨trying to get Five new Brands`);
    return this.brandsService.getNewBrands();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) brandId: number): Promise<Brand> {
    this.logger.verbose(`✨trying to get Brands by ${brandId}`);
    return this.brandsService.getById(brandId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createBrandDto: CreateBrandDto) {
    this.logger.verbose(
      `✨creating a new Brands Payload:${JSON.stringify(createBrandDto)}`,
    );
    return this.brandsService.create(createBrandDto);
  }
}
