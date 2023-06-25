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

  @Get(':id')
  getById(@Param('id') brandId: number): Promise<Brand>{
    return this.brandsService.getById(brandId);
  }

  @Post()
  createBrand(@Body() brandData : CreateBrandDto){
    return this.brandsService.createBrand(brandData);
  }

  @Delete(':id')
  removeBrand(@Param('id') brandId: string){
    return `${brandId}브랜드 삭제를 진행합니다.`;
  }


  @Patch('/:id')
  patchBrand(@Param('id') brandId: string, @Body() updateData){
    return {
      updatedBrand: brandId, 
      ...updateData
    }
  }
  

  @Get('search')
  searchBrand(@Query('brand') seachingBrand: string){
    //brands/search?brand=키르시
    return `브랜드 검색을 시도합니다. ${seachingBrand}`;
  }


}
