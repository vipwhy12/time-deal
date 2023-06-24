import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { DataSource } from 'typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {

  constructor(private categoryRepository : CategoryRepository){}

  async createCategory(createCategoryDto : CreateCategoryDto): Promise<Category>{
    const parent = await this.getCategoryById(createCategoryDto.parent);
    return this.categoryRepository.createCategory(createCategoryDto, parent);
  }

  async getCategoryById(id : number):Promise<Category>{
    const found = await this.categoryRepository.findOneBy({id});

    if(!found) {
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }
    return found;
  }
}
