import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './sale.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Brand } from 'src/brands/brand.entity';
import { Category } from 'src/category/category.entity';

@Injectable()
export class SaleRepository {
  constructor(
    @InjectRepository(Sale) private saleRepository: Repository<Sale>,
  ) { }

  async getAll(): Promise<Sale[]> {
    return await this.saleRepository.find({
      relations: {
        product: true,
        category: true,
        brand: true,
      },
      order: {
        salesCount: 'ASC',
      },
    });
  }

  async create(product: Product, brand: Brand, categories: Category[]) {
    const SALES_DEFAULT_VALUE = 0;

    await this.saleRepository.manager.transaction(
      async (transactionalEntityManager) => {
        for (const category of categories) {
          const sale: CreateSaleDto = this.saleRepository.create({
            salesCount: SALES_DEFAULT_VALUE,
            product: product,
            category: category,
            brand: brand,
          });
          await transactionalEntityManager.save(sale);
        }
      }
    )
  }


  async getTopBrand(limit: number) {
    const topBrand = await this.saleRepository
      .createQueryBuilder('sale')
      .select('sale.brandId', 'brandId')
      .addSelect('Max(brand.name)', 'brandName')
      .addSelect('SUM(sale.salesCount)', 'total')
      .innerJoin('sale.brand', 'brand')
      .groupBy('sale.brandId')
      .orderBy('total', 'DESC')
      .limit(limit)
      .getRawMany();

    return topBrand;
  }

  async getBrandSalesList(): Promise<Sale[]> {
    const Brands = await this.saleRepository
      .createQueryBuilder('sale')
      .select('sale.brandId', 'brandId')
      .addSelect('Max(brand.name)', 'brandName')
      .addSelect('SUM(sale.salesCount)', 'total')
      .innerJoin('sale.brand', 'brand')
      .groupBy('sale.brandId')
      .orderBy('total', 'DESC')
      .getRawMany();

    return Brands;
  }

  async getBrandSales(brandId: number): Promise<Sale[]> {
    return await this.saleRepository.find({
      where: { brandId: brandId },
      relations: {
        product: true,
        category: true,
        brand: true,
      },
    });
  }

  async getById(id: number): Promise<Sale> {
    return await this.saleRepository.findOneByOrFail({ id });
  }

  async updateSalesCount(updateSale: Sale, salesCount: number): Promise<Sale> {
    return this.saleRepository.manager.transaction(async (transactionalEntityManager) => {
      updateSale.salesCount = salesCount;
      return await transactionalEntityManager.save(updateSale);
    },
    );
  }
}
