import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/entities/product.entity";
import { BaseEntity } from "src/core/base.entity";
import { Brand } from "src/brands/brand.entity";
import { Category } from "src/category/category.entity";

@Entity()
export class Sale extends BaseEntity{
  @Column()
  salesCount : number;

  @Column()
  categoryId : number;

  @Column()
  brandId : number;

  @OneToMany(type => Product, product => product.sale)
  products : Product[];

}