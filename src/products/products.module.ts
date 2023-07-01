import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './entities/product.entity';
import { CategoryModule } from 'src/category/category.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),
              CategoryModule,
              BrandsModule
            ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository]
})

export class ProductsModule {}
