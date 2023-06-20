import { Controller, Body, Get, Param, Query, Patch, Post, Delete } from '@nestjs/common';


@Controller('brands')
export class BrandsController {

  @Get()
  getAllBrand(){
    return `모든 브랜드를 검색합니다.`
  }

  @Post(':id')
  createBrand(@Param('id') brandId: string, @Body() brandData){
    return `브랜드가 생성될 예정입니다. ${brandData}`;
  }

  @Delete(':id')
  removeBrand(@Param('id') brandId: string){
    return `${brandId}브랜드 삭제를 진행합니다.`;
  }


  @Patch('/:id')
  patchBrand(@Param('id') brandId: string, @Body() updateData){
    return `${brandId}의 브랜드를 업데이트할 예정입니다.`;
  }
  

  @Get('search')
  searchBrand(@Query('brand') seachingBrand: string){
    //brands/search?brand=키르시
    return `브랜드 검색을 시도합니다. ${seachingBrand}`;
  }

  @Get('rank')
  rankBrand(){
    return `가장 많이 판매된 상위 3개 브랜드명과 판매수량입니다.`
  }

}
