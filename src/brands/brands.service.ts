import { Injectable, NotFoundException } from '@nestjs/common';
import { BrandRepository } from './brand.repository';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './brand.entity';

@Injectable()
export class BrandsService {

  constructor(private brandRepository: BrandRepository){}

  async getAll(): Promise<Brand[]>{
    return await this.brandRepository.find();
  }

  async getById(id: number): Promise <Brand>{
    return await this.brandRepository.findOneBy({id});
  }

  createBrand(createBrandDto : CreateBrandDto): Promise<Brand>{
    return this.brandRepository.createBrand(createBrandDto);
  }

}
