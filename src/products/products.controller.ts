import { Controller, Body, Get, Post, Param, Inject} from '@nestjs/common';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoryService } from 'src/category/category.service';
import { BrandsService } from 'src/brands/brands.service';


@Controller('products')
export class ProductsController {

  constructor(
    private productService: ProductsService, 
    private categoryService: CategoryService,
    private brandService : BrandsService
    ){}

  @Get()
  getAll(): Promise<Product[]>{
    return this.productService.getAll();
  }

  @Get(':id')
  getById(@Param('id') productId: number){
    return this.productService.getById(productId);
  }

  @Post()
  async create(@Body() createProductDto : CreateProductDto){
    const category = await this.categoryService.getById(createProductDto.categoryId);
    const brand = await this.brandService.getById(createProductDto.brandId);
    return this.productService.create(createProductDto, category, brand);
  }



}
