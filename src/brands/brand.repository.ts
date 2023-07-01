import { DataSource, Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BrandRepository extends Repository<Brand>{

  

  async findAll(){
    return await this.find({
      relations : ["products"]
    })
  }

  async createBrand(createBrandDto: CreateBrandDto): Promise<Brand>{
    const { name, description, products } = createBrandDto = createBrandDto;
    const brand = this.create({
      name,
      description,
      products
    })

    await this.save(brand);
    return brand;
  }

}