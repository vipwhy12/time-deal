import { Category } from "../category.entity"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto{
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  depth: number;

  @IsOptional()
  @IsNumber()
  parentId : number;
}