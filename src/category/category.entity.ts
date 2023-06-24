import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,BaseEntity
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

  @TreeChildren()
  children: Category[]

  @TreeParent()
  parent: Category
}