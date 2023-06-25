import { type } from "os"
import { Product } from "src/products/entities/product.entity"
import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,BaseEntity, ManyToMany
} from "typeorm"

@Entity()
@Tree("closure-table")
export class Category extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  depth: number

  @ManyToMany(() => Product, (product) => product.category, {eager : true})
  products: Product[]

  @TreeChildren()
  children: Category[]

  @TreeParent()
  parent: Category
}