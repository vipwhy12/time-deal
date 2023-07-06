import { Controller, Body, Get, Post, Param, Inject} from '@nestjs/common';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService){}

  @Get()
  getAll(): Promise<Product[]>{
    return this.productService.getAll();
  }

  @Get('/new')
  getNewProducts(){
    return this.productService.getNewProducts();
  }

  @Get(':id')
  getById(@Param('id') productId: number){
    return this.productService.getById(productId);
  }

  @Post()
  async create(@Body() createProductDto : CreateProductDto){
    return this.productService.create(createProductDto);
  }

}
