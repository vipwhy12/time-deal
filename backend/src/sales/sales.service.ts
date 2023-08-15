import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { SaleRepository } from './sale.repository';
import { Sale } from './sale.entity';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class SalesService {
  private logger = new Logger('SalesService');
  constructor(private saleRepository: SaleRepository) { }

  async getAll(): Promise<Sale[]> {
    return await this.saleRepository.getAll();
  }

  async getById(id: number): Promise<Sale> {
    try {
      const foundSale = await this.saleRepository.getById(id);
      if (!foundSale) {
        throw new Error('🥲판매 데이터를 찾을 수 없습니다.');
      }
      return foundSale;
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        this.logger.error(`💥id가 ${id}인 판매 데이터를 찾을 수 없습니다.`);
        throw new NotFoundException(`🥲 id가 ${id}인 판매 데이터를 찾을 수 없습니다.`);
      }
    }
  }

  async getTopBrand(limit: number): Promise<Sale[]> {
    return await this.saleRepository.getTopBrand(limit);
  }

  async getBrandSalesList(): Promise<Sale[]> {
    return await this.saleRepository.getBrandSalesList();
  }

  async getBrandSales(brandId: number): Promise<Sale[]> {
    const foundBrand = await this.saleRepository.getBrandSales(brandId);
    return foundBrand;
  }

  async updateSalesCount(id: number, salesCount: number): Promise<Sale> {
    const foundSale = await this.saleRepository.getById(id);

    if (!foundSale) {
      throw new Error('🥲판매 데이터를 찾을 수 없습니다.');
    }

    const updateSale = this.saleRepository.updateSalesCount(
      foundSale,
      salesCount,
    );
    return updateSale;
  }
}
