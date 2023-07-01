import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryRepository extends Repository<Category>{

  async createCategory(createCategoryDto: CreateCategoryDto, parent?: Category): Promise<Category>{
    const {name, depth} = createCategoryDto;

    const category = this.create({
      name,
      depth,
      parent
    })
    
    await this.save(category);
    return category;
  }

}