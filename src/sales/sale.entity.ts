import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/entities/product.entity";
import { BaseEntity } from "src/core/base.entity";
import { Category } from "src/category/category.entity";
import { Brand } from "src/brands/brand.entity";

@Entity()
export class Sale extends BaseEntity{
  @Column()
  salesCount : number;

  @Column()
  brandId : number;

  @ManyToOne(type => Category, category => category.sales)
  category : Category;

  @ManyToOne(type => Brand, brand => brand.sales)
  brand : Brand;

  @ManyToOne(type => Product, product => product.sales)
  product : Product;

}