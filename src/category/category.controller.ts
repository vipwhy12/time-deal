import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import {Category} from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService : CategoryService){}

  @Get()
  getAll(){
    return this.categoryService.getAll();
  }

  @Get('/root')
  getRoot(): Promise<Category[]>{
    return this.categoryService.getRoot();
  }

  @Get('/:id')
  getById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number){
    return this.categoryService.getById(categoryId);
  }

  //트리의 모든 자식을 가져와요!(평면 배열 반환)
  @Get('/descendants/:id')
  async getDescendantsTree(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number){
    return this.categoryService.getDescendantsTree(categoryId);
  }

  //트리의 모든 부모를 가져와요!(평면 배열 반환)
  @Get('/ancestors/:id')
  async getAncestorsTree(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) categoryId: number) {
    return this.categoryService.getAncestorsTree(categoryId);
  }


  @Post()
  create(@Body() createCategoryDto : CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  

  // @Delete('/:id')
  // delete(@Param('id', ParseIntPipe) id: number): Promise<void>{
  //   return this.categoryService.delete(id);
  // }
  

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
