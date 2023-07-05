import { Controller, Body, Get, Param, Query, Patch, Post, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';


@Controller('brands')
export class BrandsController {

  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  getAll(): Promise<Brand[]>{
    return this.brandsService.getAll();
  }

  
  @Get('/new')
  getNewBrands(){
    return this.brandsService.getNewBrands();
  }


  @Get(':id')
  getById(@Param('id') brandId: number): Promise<Brand>{
    return this.brandsService.getById(brandId);
  }


  @Post()
  create(@Body() brandData : CreateBrandDto){
    return this.brandsService.create(brandData);
  }

  // @Delete(':id')
  // removeBrand(@Param('id') brandId: string){
  //   return `${brandId}브랜드 삭제를 진행합니다.`;
  // }


  // @Patch('/:id')
  // patchBrand(@Param('id') brandId: string, @Body() updateData){
  //   return {
  //     updatedBrand: brandId, 
  //     ...updateData
  //   }
  // }
  

}
