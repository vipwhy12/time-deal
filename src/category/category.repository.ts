import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { CustomRepository } from "../custom/custom.repository"
import { CreateCategoryDto } from "./dto/create-category.dto";


@CustomRepository(Category)
export class CategoryRepository extends Repository<Category>{

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>{
    const {name, depth, parent} = createCategoryDto;
    const category = this.create({
      name,
      depth,
      parent
    })
    
    await this.save(category);
    return category;
  }

}