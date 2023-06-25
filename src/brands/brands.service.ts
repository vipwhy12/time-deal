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
    const found = await this.brandRepository.findOneBy({id});
    if(!found){
      throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
    }
    return found 
  }

  createBrand(createBrandDto : CreateBrandDto): Promise<Brand>{
    return this.brandRepository.createBrand(createBrandDto);
  }

}
