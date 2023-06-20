import { Get } from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService){}

  @Get()
  getAllProducts(): Promise<Product[]>{
    return this.productService.getAllProducts();
  }
}
