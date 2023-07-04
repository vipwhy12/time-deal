import { BaseEntity } from "src/core/base.entity"
import { CategoryProduct } from "src/products/entities/category.products.entity"
import { Product } from "src/products/entities/product.entity"
import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn, ManyToMany, JoinTable, OneToMany
} from "typeorm"

@Entity()
@Tree("closure-table")
export class Category extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @OneToMany(() => CategoryProduct, (categoryProduct) => categoryProduct.category)
  categoryProducts: CategoryProduct[];

  @TreeChildren()
  children: Category[]

  @TreeParent()
  parent: Category
}