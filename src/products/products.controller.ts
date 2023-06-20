import { Controller, Body, Get, Param, Query, Patch, Post, Delete } from '@nestjs/common';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService){}

  @Get()
  getAllProducts(): Promise<Product[]>{
    return this.productService.getAllProducts();
  }



}
