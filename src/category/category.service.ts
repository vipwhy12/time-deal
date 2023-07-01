import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CategoryService {

  constructor(private categoryRepository : CategoryRepository){}

  async getAll(): Promise<Category[]>{
    const trees = await this.categoryRepository.manager.getTreeRepository(Category).findTrees({ relations: ["products"] })
    return trees;
  }

  async create(createCategoryDto : CreateCategoryDto): Promise<Category>{

    if(!createCategoryDto.parentId){
      return this.categoryRepository.createCategory(createCategoryDto);
    } else {
      return this.categoryRepository.createCategory(createCategoryDto, await this.getById(createCategoryDto.parentId));
    }
  }

  async getById(id : number):Promise<Category>{
    const found = await this.categoryRepository.findOneBy({id});
    if(!found) {
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }
    return found;
  }

  
  async getChildrenProduct(id : number, parent : Category): Promise<Product[]>{
    const found = await this.categoryRepository.manager.getTreeRepository(Category).findDescendants(parent, { relations: ["products"] })
    let products: Product[] = []

    if(!found){
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }

    for(let index in found){
      if(found[index].products.length !== 0){
        for(let product of found[index].products){
          products.push(product)
        }
      }
    }

    return products;
  }

  async getRoot(): Promise<Category[]>{
    const found = await this.categoryRepository.manager.getTreeRepository(Category).findRoots({relations: ["children"]})
  
    if(!found){
      throw new NotFoundException('최상단 카테고리가 존재하지 않습니다. 생성하여주세요.')
    }

    return found
  }

  async delete(id: number): Promise<void>{
    const result = await this.categoryRepository.delete(id);

    if(result.affected === 0){
      throw new NotFoundException(`Category ID 를 찾을 수 없습니다.`)
    }
    
    console.log(result)
  }
}
