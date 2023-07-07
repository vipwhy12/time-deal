import { Injectable } from '@nestjs/common';
import { SaleRepository } from './sale.repository';
import { Sale } from './sale.entity';
import { BrandRepository } from 'src/brands/brand.repository';

@Injectable()
export class SalesService {

  constructor(private saleRepository: SaleRepository){}

  getAll():Promise<Sale[]>{
    return this.saleRepository.getAll();
  }

  getById(id: number): Promise<Sale>{
    const foundSale = this.saleRepository.getById(id);
    if(!foundSale){
      throw new Error('🥲판매 데이터를 찾을 수 없습니다.')
    }
    return foundSale;
  }

  getTopBrand(limit : number):Promise<Sale[]>{
    return this.saleRepository.getTopBrand(limit);
  }

  getBrandSalesList():Promise<Sale[]>{
    return this.saleRepository.getBrandSalesList();
  }


  getBrandSales(brandId : number):Promise<Sale[]>{
    const foundBrand = this.saleRepository.getBrandSales(brandId);
    return foundBrand;
  }

  async updateSalesCount(id: number, salesCount: number): Promise<Sale> {
    const foundSale = await this.saleRepository.getById(id);

    if(!foundSale){
      throw new Error('🥲판매 데이터를 찾을 수 없습니다.')
    }
    
    const updateSale = this.saleRepository.updateSalesCount(foundSale, salesCount)
    return updateSale
  }
}
