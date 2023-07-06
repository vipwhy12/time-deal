import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoryRepository } from 'src/category/category.repository';
import { BrandRepository } from 'src/brands/brand.repository';
import { Category } from 'src/category/category.entity';
import { SaleRepository } from 'src/sales/sale.repository';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';
import { Sale } from 'src/sales/sale.entity';

@Injectable()
export class ProductsService {
  constructor(
    private productRepository : ProductRepository,
    private categoryRepository : CategoryRepository,
    private brandRepository : BrandRepository,
    private saleRepository : SaleRepository
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
    const foundBrand = await this.brandRepository.getById(createProductDto.brandId);
    const foundCategory : Category[] = [];

    for (const categoryId of createProductDto.categoryId) {
      const category = await this.categoryRepository.getById(categoryId);

      if (category) {
        foundCategory.push(category);
      } else {
        console.log("foundcategory : " + foundBrand)
        throw new NotFoundException(`카테고리를 찾을 수 없습니다.`);
      }
    }

    if(!foundBrand) {
      throw new NotFoundException(`${createProductDto.brandId} : 브랜드를 찾을 수 없습니다.`);
    }

    const created = await this.productRepository.create(createProductDto, foundCategory, foundBrand);
    const createdCategory = await this.productRepository.getById(created.id)
    const createSale = await this.saleRepository.create(createdCategory, foundBrand, foundCategory);

    return created
  }
}
