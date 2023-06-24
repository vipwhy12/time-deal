import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { DataSource } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService : CategoryService){}

  @Post()
  createCategory(@Body() categoryData : CreateCategoryDto){
    return this.categoryService.createCategory(categoryData);
  }

  @Get(':id')
  getCategory(@Param('id') brandId: number){
    return this.categoryService.getCategoryById(brandId);
  }

  
}
