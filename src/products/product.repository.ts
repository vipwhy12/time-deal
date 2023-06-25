import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CustomRepository } from "../custom/custom.repository"
import { CreateProductDto } from "./dto/create-product.dto";
import { Category } from "src/category/category.entity";
import { Brand } from "src/brands/brand.entity";

@CustomRepository(Product)
export class ProductRepository extends Repository<Product>{

  async findAll(){
    return await this.find({
      loadRelationIds: true
    })
  }

  async createProduct(createProductDto:CreateProductDto, category: Category, brand:Brand): Promise<Product>{
    const { name } = createProductDto;
    const product = this.create({
      name, 
      brand,
      category : [category]
    })
    await this.save(product);
    return product
  }
  
}