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
}
