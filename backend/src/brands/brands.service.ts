import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { BrandRepository } from './brand.repository';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './brand.entity';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class BrandsService {
  private logger = new Logger('BrandsService');
  private static staticLogger = new Logger();
  private static cachedNewBrands: Brand[] = [];
  private static cacheExpiration: number = 120000; //2분

  constructor(private brandRepository: BrandRepository) { }

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
    if (BrandsService.cachedNewBrands.length > 0) {
      return BrandsService.cachedNewBrands;
    }

    const newBrands = await this.brandRepository.getNewBrands();

    BrandsService.cachedNewBrands = newBrands;

    setTimeout(() => {
      BrandsService.clearCache();
    }, BrandsService.cacheExpiration);

    return newBrands;
  }

  static clearCache(): void {
    BrandsService.cachedNewBrands = [];
    BrandsService.staticLogger.debug('✨캐시가 지워졌습니다!');
  }

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    return await this.brandRepository.create(createBrandDto);
  }
}
