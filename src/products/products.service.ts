import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from 'src/category/category.entity';
import { Brand } from 'src/brands/brand.entity';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository){}

  async getAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async create(createProductDto : CreateProductDto, category: Category, brand:Brand){
    return this.productRepository.createProduct(createProductDto, category, brand);
  }

}
