import { Injectable, NotFoundException } from '@nestjs/common';
import {Category} from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CategoryService {

  constructor(private categoryRepository : CategoryRepository){}

  getAll(): Promise<Category[]>{
    const trees = this.categoryRepository.getAll()
    return trees;
  }

  create(createCategoryDto : CreateCategoryDto): Promise<Category>{
    return this.categoryRepository.create(createCategoryDto);
  }

  async getById(id : number):Promise<Category>{
    const found = await this.categoryRepository.getById(id);

    if(!found) {
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }
    return found;
  }

  
  async getDescendantsTree(id : number):Promise<Product[]>{
    const found = await this.categoryRepository.getDescendantsTree(id)
    
    if(!found){
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }

    const descendantsTreeProducts = this.getAllProducts(found)
    return descendantsTreeProducts;
  }


  async getAncestorsTree(id: number):Promise<Category[]>{
    const found = await this.categoryRepository.getAncestorsTree(id);

    if(!found){
      throw new NotFoundException(`${id}의 조상을 찾을 수 없습니다?`);
    }
    return found;
  }

  async getRoot(): Promise<Category[]>{
    const found = this.categoryRepository.getRoot()
  
    if(!found){
      throw new NotFoundException('최상단 카테고리가 존재하지 않습니다. 생성하여주세요.')
    }

    return found
  }

  getAllProducts(descendantsTree: Category): Product[] {
    const descendantsProducts: Product[] = [];
    function findProductsCategories(categories: Category[]) {
      for (const category of categories) {
        if (category.children.length > 0) {
          findProductsCategories(category.children);
        }
        descendantsProducts.push(...category.products);
      }
    }
  
    findProductsCategories([descendantsTree]);
  
    return descendantsProducts;
  }


  // async delete(id: number): Promise<void>{
  //   const result = await this.categoryRepository.delete(id);

  //   if(result.affected === 0){
  //     throw new NotFoundException(`Category ID 를 찾을 수 없습니다.`)
  //   }
    
  //   console.log(result)
  // }
}
