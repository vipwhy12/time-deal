import { Controller, Body, Get, Param, Post, Logger } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';


@Controller('brands')
export class BrandsController {
  private logger = new Logger('BrandsController')
  constructor(private readonly brandsService: BrandsService) { }

  @Get()
  getAll(): Promise<Brand[]> {
    this.logger.verbose(`✨trying to get all Brands`)
    return this.brandsService.getAll();
  }


  @Get('/new')
  getNewBrands() {
    this.logger.verbose(`✨trying to get Five new Brands`)
    return this.brandsService.getNewBrands();
  }


  @Get(':id')
  getById(@Param('id') brandId: number): Promise<Brand> {
    this.logger.verbose(`✨trying to get Brands by ${brandId}`)
    return this.brandsService.getById(brandId);
  }


  @Post()
  create(@Body() brandData: CreateBrandDto) {
    this.logger.verbose
      (`✨creating a new Brands Payload:${JSON.stringify(brandData)}`)
    return this.brandsService.create(brandData);
  }
}
