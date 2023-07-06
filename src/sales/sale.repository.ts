import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Sale } from "./sale.entity";
import { Repository } from "typeorm";
import { Product } from "src/products/entities/product.entity";
import { CreateSaleDto } from "./dto/create-sale.dto";
import { Brand } from "src/brands/brand.entity";
import { Category } from "src/category/category.entity";


@Injectable()
export class SaleRepository{
  constructor(@InjectRepository(Sale) private saleRepository : Repository<Sale>){}

  async getAll(): Promise<Sale[]>{
    return await this.saleRepository.find({
      relations : { 
        "product" : true , 
        "category": true ,
        "brand" : true
      }, 
      order : {
        salesCount : "ASC"
      }
    })
  }

  async create(product : Product, brand : Brand, categories :Category[]){
    const SALES_DEFAULT_VALUE = 0;

    for (const category of categories) {
      const sale: CreateSaleDto = this.saleRepository.create({
        salesCount: SALES_DEFAULT_VALUE,
        product : product,
        category: category,
        brand : brand
      })

      const createSale = await this.saleRepository.save(sale);
    }    
  }

  async getTopBrand(){
    const GET_SIZE : number = 3;
    const topBrand = await this.saleRepository
      .createQueryBuilder('sale')
      .select('sale.brandId', 'brandId')
      .select('Max(brand.name)', 'brandName')
      .addSelect('SUM(sale.salesCount)', 'sum')
      .innerJoin('sale.brand', 'brand')
      .groupBy('sale.brandId')
      .orderBy('sum', 'DESC')
      .limit(GET_SIZE)
      .getRawMany();

    return topBrand
  }

  async getBrandSales(brandId : number) : Promise<Sale[]>{
    return await this.saleRepository.find({ 
      where : {brandId : brandId},
      relations : { 
        "product" : true , 
        "category": true ,
        "brand" : true
      }
    })
  }
}
