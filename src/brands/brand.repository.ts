import { Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BrandRepository{

  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>
  ) {}

  getAll(): Promise <Brand[]>{
    return this.brandRepository.find({});
  }

  getById(id: number): Promise <Brand>{
    return this.brandRepository.findOneOrFail({
      relations : { products : true },
      where : { id : id }
    });
  }
  
  getNewBrands(): Promise <Brand[]>{
    return this.brandRepository.find({
      order : { createdAt : 'DESC' },
      take : 5
    });
  } 

  create(createBrandDto: CreateBrandDto): Promise<Brand>{
    const { name, description, products } = createBrandDto;
    const brand = this.brandRepository.create({
      name,
      description,
      products
    });

    return this.brandRepository.save(brand);
  }
}