import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository){}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

}
