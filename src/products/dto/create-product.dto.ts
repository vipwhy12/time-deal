import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";
import { Sale } from "../../sales/sale.entity";
import { Transform, Type } from "class-transformer";


export class CreateProductDto{
  @IsNotEmpty()
  @IsString()
  name : string

  @IsNotEmpty()
  @IsNumber()
  brandId : number

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  @Transform(({ value }) => value.map(Number))
  categoryId: number[]

  @IsOptional()
  sale : Sale

}