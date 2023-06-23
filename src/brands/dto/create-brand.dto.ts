import { IsNotEmpty, IsObject, IsString } from "class-validator";
import { Product } from "src/products/entities/product.entity";
import { Brand } from "../brand.entity";

export class CreateBrandDto{
  @IsString()
  @IsNotEmpty()
  name : string;

  @IsNotEmpty()
  description: string;

  // @IsObject({ each : true })
  // products: Product[]

  toEntity(): Brand{
    const brand = new Brand();
    brand.name = this.name;
    brand.description = this.description;
    // brand.products = this.products;

    return brand;
  }
}