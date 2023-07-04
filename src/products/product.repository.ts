import { DataSource, Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { Brand } from "src/brands/brand.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductRepository {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async getAll(){
    return await this.productRepository.find({});
  }

  async getById(id : number) : Promise<Product>{
    return await this.productRepository.findOneBy({id});
  }

  async create(createProductDto:CreateProductDto, category, brand){
    const { name } = createProductDto;
    const product = this.productRepository.create({
      name,
      categoryProducts : [category],
      brand : brand
    })
    await this.productRepository.save(product);
    return product
  }
  
}