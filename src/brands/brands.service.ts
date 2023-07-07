import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { BrandRepository } from './brand.repository';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './brand.entity';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class BrandsService {
  private logger = new Logger('BrandsService');
  constructor(private brandRepository: BrandRepository) {}

  async getAll(): Promise<Brand[]> {
    return await this.brandRepository.getAll();
  }

  async getById(id: number): Promise<Brand> {
    try {
      return await this.brandRepository.getById(id);
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        this.logger.error(`💥id가 ${id}인 브랜드를 찾을 수 없습니다.`);
        throw new NotFoundException(
          `🥲 id가 ${id}인 브랜드를 찾을 수 없습니다.`,
        );
      }
    }
  }

  async getNewBrands(): Promise<Brand[]> {
    return await this.brandRepository.getNewBrands();
  }

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    return await this.brandRepository.create(createBrandDto);
  }
}
