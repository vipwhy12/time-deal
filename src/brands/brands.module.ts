import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandRepository } from './brand.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BrandRepository])],
  controllers: [BrandsController],
  providers: [BrandsService, BrandRepository]
})
export class BrandsModule {}
