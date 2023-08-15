import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoryRepository } from 'src/category/category.repository';
import { BrandRepository } from 'src/brands/brand.repository';
import { Category } from 'src/category/category.entity';
import { SaleRepository } from 'src/sales/sale.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class ProductsService {
  private logger = new Logger('ProductsService');

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private brandRepository: BrandRepository,
    private saleRepository: SaleRepository,
  ) { }

  async getAll(): Promise<Product[]> {
    return await this.productRepository.getAll();
  }

  async getNewProducts(): Promise<Product[]> {
    return await this.productRepository.getNewProducts();
  }

  async getById(id: number) {
    try {
      return await this.productRepository.getById(id);
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        this.logger.error(`💥id가 ${id}인 상품을 찾을 수 없습니다.`);
        throw new NotFoundException(`🥲 id가 ${id}인 상품을 찾을 수 없습니다.`);
      }
    }
  }

  async create(createProductDto: CreateProductDto) {
    const foundBrand = await this.brandRepository.getById(
      createProductDto.brandId,
    );

    const foundCategory: Category[] = [];
    for (const categoryId of createProductDto.categoryId) {
      const category = await this.categoryRepository.getById(categoryId);

      if (category) {
        foundCategory.push(category);
      } else {
        throw new NotFoundException(`카테고리를 찾을 수 없습니다.`);
      }
    }

    const created = await this.productRepository.create(
      createProductDto,
      foundCategory,
      foundBrand,
    );

    const createdCategory = await this.productRepository.getById(created.id);

    await this.saleRepository.create(
      createdCategory,
      foundBrand,
      foundCategory,
    );

    return created;
  }
}
