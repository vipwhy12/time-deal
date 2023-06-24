import { Category } from "./category.entity";
import { DataSource, Repository } from "typeorm";
import { CustomRepository } from "./custom.repository";
import { CreateCategoryDto } from "./dto/create-category.dto";


@CustomRepository(Category)
export class CategoryRepository extends Repository<Category>{



  async createCategory(createCategoryDto: CreateCategoryDto, parent: Category): Promise<Category>{
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