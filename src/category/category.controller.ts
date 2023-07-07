import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  private logger = new Logger('CategoryController');
  constructor(private categoryService: CategoryService) { }

  @Get()
  getAll() {
    this.logger.verbose(`✨trying to get all Category`);
    return this.categoryService.getAll();
  }

  @Get('/root')
  getRoot(): Promise<Category[]> {
    this.logger.verbose(`✨trying to get root Category`);
    return this.categoryService.getRoot();
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) categoryId: number) {
    this.logger.verbose(`✨trying to get Category by ${categoryId}`);
    return this.categoryService.getById(categoryId);
  }

  //트리의 모든 자식을 평면 배열로 반환하고,
  // 각 자식들이 가진 PRODUCT를 반환
  @Get('/descendants/:id')
  async getDescendantsTree(@Param('id', ParseIntPipe) categoryId: number) {
    this.logger.verbose(`✨trying to get descendants Category`);
    return this.categoryService.getDescendantsTree(categoryId);
  }

  //트리의 모든 부모를 평면 배열로 반환
  @Get('/ancestors/:id')
  async getAncestorsTree(@Param('id', ParseIntPipe) categoryId: number) {
    this.logger.verbose(`✨trying to get ancestors Category`);
    return this.categoryService.getAncestorsTree(categoryId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    this.logger.verbose(
      `✨creating a new Category Payload:${JSON.stringify(createCategoryDto)}`,
    );
    return this.categoryService.create(createCategoryDto);
  }
}
