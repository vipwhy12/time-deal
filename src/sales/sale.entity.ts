import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/entities/product.entity";
import { BaseEntity } from "src/core/base.entity";
import { Category } from "src/category/category.entity";
import { Brand } from "src/brands/brand.entity";

@Entity()
export class Sale extends BaseEntity{
  @Column()
  salesCount : number;

  @ManyToOne(type => Product, product => product.sales)
  category : Category;

  @ManyToOne(type => Product, product => product.sales)
  brand : Brand;

  @ManyToOne(type => Product, product => product.sales)
  product : Product;

}