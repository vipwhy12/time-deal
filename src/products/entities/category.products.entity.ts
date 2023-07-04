import { Category } from "src/category/category.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class CategoryProduct{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, (category) => category.categoryProducts)
  category: Category;

  @ManyToOne(() => Product, (product) => product.categoryProducts)
  product: Product;
}