import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryRepository{

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async getAll() : Promise<Category[]>{
    return await this.categoryRepository.manager
    .getTreeRepository(Category)
    .findTrees()
  }

  async getById(id : number) {
    return await this.categoryRepository.findOneBy({id});
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category>{
    const {name, depth, parentId} = createCategoryDto;
    let category : Category

    if(parentId){
      const parent = await this.getById(parentId);
      if(!parent)
        throw new NotFoundException(`${parentId}를 찾을 수 없습니다.`);
      
      category = this.categoryRepository.create({
        name,
        parent
      });
    } else {
      category = this.categoryRepository.create({
        name
      });
    }
    
    await this.categoryRepository.save(category);
    return category;
  }

  async getDescendantsTree(id : number): Promise<Category>{
    const found = await this.getById(id)
    if(!found)
    throw new NotFoundException(`${id}를 찾을 수 없습니다.`);

    return await this.categoryRepository.manager.getTreeRepository(Category).findDescendantsTree(found)
  }

  async getRoot(): Promise<Category[]>{
    return await this.categoryRepository.manager.getTreeRepository(Category).findRoots({relations: ["children"]})
  }

}