import { IsNotEmpty, IsObject, IsString, IsOptional } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';
import { Brand } from '../brand.entity';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsObject({ each: true })
  @IsOptional()
  products: Product[];
}
