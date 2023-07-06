import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Sale } from "./sale.entity";
import { Repository } from "typeorm";
import { Product } from "src/products/entities/product.entity";
import { CreateProductDto } from "src/products/dto/create-product.dto";
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
      }
    })
  }

  async create(product : Product, brand : Brand, categories :Category[]){
    for (const category of categories) {
      const sale: CreateSaleDto = {
        salesCount: 0,
        category: category,
        brand: brand,
        product: product
      };
      const createdSale = await this.saleRepository.save(sale);
      console.log(createdSale)
    }
    
  }



}