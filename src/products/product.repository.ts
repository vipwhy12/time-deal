import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductRepository extends Repository<Product>{
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager())
  }

  async createProduct(product:Product): Promise<Product>{
    await product.save();
    return product
  }
  
}