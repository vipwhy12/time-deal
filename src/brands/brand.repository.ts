import { Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { CustomRepository } from "../custom/custom.repository";
import { CreateBrandDto } from "./dto/create-brand.dto";

@CustomRepository(Brand)
export class BrandRepository extends Repository<Brand>{

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