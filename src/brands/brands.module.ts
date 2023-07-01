import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandRepository } from './brand.repository';
import { Brand } from './brand.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Brand])
  ],
  controllers: [BrandsController],
  providers: [BrandsService, BrandRepository],
  exports: [BrandsService, BrandRepository]
})
export class BrandsModule {}
