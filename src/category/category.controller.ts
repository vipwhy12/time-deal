import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { DataSource } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Product } from 'src/products/entities/product.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService : CategoryService){}

  @Get()
  getAll(){
    return this.categoryService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number){
    return this.categoryService.getById(categoryId);
  }


  @Get('/product/:id')
  getProducts(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number){
    return this.categoryService.getProducts(categoryId);
  }

  @Post()
  create(@Body() categoryData : CreateCategoryDto) {
    return this.categoryService.create(categoryData);
  }
  

  // @Patch(':id')
  // patch(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) brandId: number,
  //        @Body() categoryData: categoryData) {
  //   return 'test';
  // }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) brandId: number){
    return 'test';
  }
  
}
