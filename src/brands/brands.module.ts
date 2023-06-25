import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandRepository } from './brand.repository';
import { Brand } from './brand.entity';
import { CustomTypeOrmModule } from 'src/custom/customTypeOrmModule';

@Module({
  imports: [
    TypeOrmModule.forFeature([Brand]),
    CustomTypeOrmModule.forCustomRepository([BrandRepository])
  ],
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}
