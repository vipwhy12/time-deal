import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";
import { Brand } from "src/brands/brand.entity";
import { Category } from "src/category/category.entity";
import { Sale } from "../entities/sale.entity";
import { IsNull, ObjectId } from "typeorm";

export class CreateProductDto{
  @IsNotEmpty()
  @IsString()
  name : string

  @IsNotEmpty()
  @IsNumber()
  brandId : number

  @IsNotEmpty()
  @IsNumber()
  categoryId: number

  @IsOptional()
  sale : Sale

}