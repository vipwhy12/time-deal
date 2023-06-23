import { Injectable, NotFoundException } from '@nestjs/common';
import { BrandRepository } from './brand.repository';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './brand.entity';

@Injectable()
export class BrandsService {

  constructor(private brandRepository: BrandRepository){}

  createBrand(createBrandDto : CreateBrandDto): Promise<Brand>{
    return this.brandRepository.createBrand(createBrandDto.toEntity())
  }

  // async getAllBrands(): Promise <Brand[]>{
  //   return this.brandRepository.find();
  // }


  // async getBrandById(id: number): Promise <Brand> {
  //   const found = await this.brandRepository.findOneBy({id});
  //   if(!found){
  //     throw new NotFoundException(`${id}를 찾을 수 없습니다.`)
  //   }
  //   return found;
  // }


}
