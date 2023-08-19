import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BrandsModule } from './brands/brands.module';
import { CategoryModule } from './category/category.module';
import { SalesModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ProductsModule,
    BrandsModule,
    CategoryModule,
    SalesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
