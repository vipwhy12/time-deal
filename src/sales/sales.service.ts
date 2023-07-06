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

  getTopBrand():Promise<Sale[]>{
    return this.saleRepository.getTopBrand();
  }

  getBrandSales(brandId : number):Promise<Sale[]>{
    const foundBrand = this.saleRepository.getBrandSales(brandId);
    return foundBrand;
  }
}
