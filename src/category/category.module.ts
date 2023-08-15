import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CustomTypeOrmModule } from '../custom/customTypeOrmModule';
import { Category } from './category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    CustomTypeOrmModule.forCustomRepository([CategoryRepository])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
