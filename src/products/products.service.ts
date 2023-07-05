import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoryRepository } from 'src/category/category.repository';
import { BrandRepository } from 'src/brands/brand.repository';

@Injectable()
export class ProductsService {
  constructor(
    private productRepository : ProductRepository,
    private categoryRepository : CategoryRepository,
    private brandRepository : BrandRepository
    ){}

  getAll(): Promise<Product[]> {
    return this.productRepository.getAll();
  }

  getNewProducts(): Promise<Product[]> {
    return this.productRepository.getNewProducts();
  }

  getById(id : number){
    const found = this.productRepository.getById(id);

    if(!found) {
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }

    return found;
  } 

  async create(createProductDto : CreateProductDto){
    const foundCategory = await this.categoryRepository.getById(createProductDto.categoryId);
    const foundBrand = await this.brandRepository.getById(createProductDto.brandId);

    if(!foundCategory || !foundBrand) {
      console.log("foundCategory : " + foundCategory)
      console.log("foundBrand : " + foundBrand)
      
      throw new NotFoundException(`브랜드 혹은 카테고리를 찾을 수 없습니다.`);
    }
    return this.productRepository.create(createProductDto, foundCategory, foundBrand);
  }
}
