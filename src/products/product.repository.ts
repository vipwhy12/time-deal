import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/category/category.entity";
import { Brand } from "src/brands/brand.entity";

@Injectable()
export class ProductRepository {

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) {}

  async getAll(): Promise<Product[]>{
    return await this.productRepository.find({});
  }

  async getNewProducts(): Promise<Product[]>{
    return await this.productRepository.find({
      order : { createdAt : 'DESC' },
      take : 5
    });
  } 

  async getById(id : number) : Promise<Product>{
    return await this.productRepository.findOneOrFail({
      relations : { brand : true, category :true },
      where : { id: id }
    });
  }

  async create(createProductDto:CreateProductDto, category: Category, brand : Brand){
    const { name } = createProductDto;
    const product = this.productRepository.create({
      name,
      category : [category],
      brand : brand
    })
    await this.productRepository.save(product);
    return product
  }
  
}