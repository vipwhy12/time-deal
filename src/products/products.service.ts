import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from 'src/category/category.entity';
import { Brand } from 'src/brands/brand.entity';
import { relative } from 'path';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository){}

  async getAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async getById(id : number){
    const found = await this.productRepository.find({
      where: {id : id},
      relations : { category : true , brand : true}
    })

    if(!found) {
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }

    return found;
  } 

  async create(createProductDto : CreateProductDto, category: Category, brand:Brand){
    return await this.productRepository.createProduct(createProductDto, category, brand);
  }


}
