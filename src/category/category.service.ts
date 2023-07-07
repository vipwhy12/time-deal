import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Product } from 'src/products/entities/product.entity';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class CategoryService {
  private logger = new Logger('CategoryService');

  constructor(private categoryRepository: CategoryRepository) { }

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.create(createCategoryDto);
  }

  async getById(id: number): Promise<Category> {
    try {
      return await this.categoryRepository.getById(id);
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        this.logger.error(`💥id가 ${id}인 브랜드를 찾을 수 없습니다.`);
        throw new NotFoundException(
          `🥲 id가 ${id}인 브랜드를 찾을 수 없습니다.`,
        );
      }
      throw error;
    }
  }

  async getDescendantsTree(id: number): Promise<Product[]> {
    const foundDescendantsTree =
      await this.categoryRepository.getDescendantsTree(id);
    const descendantsTreeProducts = this.getAllProducts(foundDescendantsTree);
    return descendantsTreeProducts;
  }

  async getAncestorsTree(id: number): Promise<Category[]> {
    return await this.categoryRepository.getAncestorsTree(id);
  }

  async getRoot(): Promise<Category[]> {
    return await this.categoryRepository.getRoot();
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
}
