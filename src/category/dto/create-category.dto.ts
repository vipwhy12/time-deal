import { ObjectId } from "typeorm";
import { Category } from "../category.entity"
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto{
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  depth: number;

  @IsOptional()
  parent : Category;
}