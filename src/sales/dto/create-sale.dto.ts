import { IsArray, IsNotEmpty, IsNumber, IsObject } from "class-validator";
import { Brand } from "src/brands/brand.entity";
import { Category } from "src/category/category.entity";
import { Product } from "src/products/entities/product.entity";

export class CreateSaleDto{
  @IsNotEmpty()
  @IsNumber()
  salesCount : number;

  @IsNotEmpty()
  category : Category;

  @IsNotEmpty()
  brand : Brand;
  
  @IsNotEmpty()
  product : Product;
}
