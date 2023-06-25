import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { ProductTarget } from "../product-target-enum"; 
import { Brand } from "../../brands/brand.entity";
import { Sale } from "./sale.entity";
import { Category } from "src/category/category.entity";

@Entity()
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(type => Brand, brand => brand.products, {eager: false})
  brand: Brand;

  @ManyToOne(() => Category, category => category.products)
  category: Category;

  @OneToOne(() => Sale, (sale) => sale.product) // specify inverse side as a second parameter
  @JoinColumn()
  sale: Sale;
}