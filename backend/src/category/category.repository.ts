import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) { }

  getAll(): Promise<Category[]> {
    return this.categoryRepository.manager
      .getTreeRepository(Category)
      .findTrees({});
  }

  getById(id: number) {
    return this.categoryRepository.findOneOrFail({
      where: { id: id },
      relations: { products: true, children: true },
    });
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { name, parentId } = createCategoryDto;
    let category: Category;

    if (parentId) {
      const parent = await this.getById(parentId);
      if (!parent)
        throw new NotFoundException(`${parentId}를 찾을 수 없습니다.`);

      category = this.categoryRepository.create({
        name,
        parent,
      });
    } else {
      category = this.categoryRepository.create({ name });
    }

    return this.categoryRepository.manager.transaction(
      async (transactionalEntityManager) => {
        const saveCategory = await transactionalEntityManager.save(category);
        return saveCategory;
      },
    );
  }

  async getDescendantsTree(id: number): Promise<Category> {
    const found = await this.getById(id);
    return await this.categoryRepository.manager
      .getTreeRepository(Category)
      .findDescendantsTree(found, { relations: ['products'] });
  }

  async getAncestorsTree(id: number): Promise<Category[]> {
    const found = await this.getById(id);
    return await this.categoryRepository.manager
      .getTreeRepository(Category)
      .findAncestors(found);
  }

  async getRoot(): Promise<Category[]> {
    return await this.categoryRepository.manager
      .getTreeRepository(Category)
      .findRoots({ relations: ['children'] });
  }
}
