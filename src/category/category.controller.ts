import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService : CategoryService){}

  @Get()
  getAll(){
    return this.categoryService.getAll();
  }

  @Get('/root')
  async getRoot(): Promise<Category[]>{
    return this.categoryService.getRoot();
  }

  @Get('/:id')
  getOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number){
    return this.categoryService.getById(categoryId);
  }


  @Get('/childrenProduct/:id')
  async getChildrenProduct(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number){
    const parent = await this.getOne(categoryId);
    return this.categoryService.getChildrenProduct(categoryId, parent);
  }


  @Post()
  create(@Body() createCategoryDto : CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return this.categoryService.delete(id);
  }
  

  // @Patch(':id')
  // patch(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) brandId: number,
  //        @Body() categoryData: categoryData) {
  //   return 'test';
  // }

  // @Delete(':id')
  // remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) brandId: number){
  //   return 'test';
  // }
  
}
