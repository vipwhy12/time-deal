import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {

  constructor(private categoryRepository : CategoryRepository){}

  async getAll(): Promise<Category[]>{
    const trees = await this.categoryRepository.manager.getTreeRepository(Category).findTrees()
    return trees;
  }

  async create(createCategoryDto : CreateCategoryDto): Promise<Category>{
    if(createCategoryDto.parent){ createCategoryDto.parent =  await this.getById(createCategoryDto.parent.id);}
    return this.categoryRepository.createCategory(createCategoryDto);
  }

  async getById(id : number):Promise<Category>{
    const found = await this.categoryRepository.findOneBy({id});
    if(!found) {
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }
    return found;
  }

  
  async getProducts(id : number): Promise<Category[]>{
    const found = await this.categoryRepository.manager.getTreeRepository(Category).findTrees()
    if(!found){
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }
    return found;
  }
}
