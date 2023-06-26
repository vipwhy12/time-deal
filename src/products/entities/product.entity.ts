import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany } from "typeorm";
import { Brand } from "../../brands/brand.entity";
import { Sale } from "../../sales/sale.entity";
import { Category } from "src/category/category.entity";

@Entity()
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(type => Brand, brand => brand.products, {eager: false})
  brand: Brand;

  @ManyToMany(() => Category, category => category.products)
  category: Category[];

  @OneToOne(() => Sale, (sale) => sale.product) // specify inverse side as a second parameter
  @JoinColumn()
  sale: Sale;
}