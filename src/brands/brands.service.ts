import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { BrandRepository } from './brand.repository';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './brand.entity';

@Injectable()
export class BrandsService {
  private logger = new Logger('BrandsService')
  constructor(private brandRepository: BrandRepository){}

  async getAll(): Promise<Brand[]>{
    try{
      const foundBrands = await this.brandRepository.getAll();
      return foundBrands
    }catch(err){
      this.logger.error(`💥Failed to get all Brands`)
      throw new Error('💥모든 브랜드를 가져오는데 실패하였습니다.');
    }
  }

  async getById(id: number): Promise <Brand>{
    const foundBrand = await this.brandRepository.getById(id);
    if(!foundBrand){
      this.logger.error(`💥Failed ${id} not Found`)
      throw new NotFoundException(`💥${id}를 찾을 수 없습니다.`);
    }
    return foundBrand 
  }

  async getNewBrands(): Promise<Brand[]> {
    try{
      const foundBrands = await this.brandRepository.getNewBrands();
      return foundBrands
    }catch(e){
      this.logger.error(`💥Failed to get new Brands`)
      throw new Error('💥최신 브랜드를 가져오는데 실패하였습니다.');
    }
  }

  async create(createBrandDto : CreateBrandDto): Promise<Brand>{
    try{
      return await this.brandRepository.create(createBrandDto);
    } catch(err) {
      this.logger.error(`💥Failed to create brand`);
      throw new Error('💥브랜드 생성에 실패하였습니다.');
    }
  }
}
