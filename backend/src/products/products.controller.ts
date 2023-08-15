import { Controller, Body, Get, Post, Param, ParseIntPipe, Logger, ValidationPipe, UsePipes } from '@nestjs/common';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  private logger = new Logger('ProductsController');
  constructor(private productService: ProductsService) { }

  @Get()
  getAll(): Promise<Product[]> {
    this.logger.verbose(`✨trying to get all Product`);
    return this.productService.getAll();
  }

  @Get('/new')
  getNewProducts() {
    this.logger.verbose(`✨trying to get Five new Product`);
    return this.productService.getNewProducts();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) productId: number) {
    this.logger.verbose(`✨trying to get Brands by ${productId}`);
    return this.productService.getById(productId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createProductDto: CreateProductDto) {
    this.logger.verbose(
      `✨creating a new Brands Payload:${JSON.stringify(createProductDto)}`,
    );
    return this.productService.create(createProductDto);
  }
}
