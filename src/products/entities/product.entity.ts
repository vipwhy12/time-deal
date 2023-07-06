import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany } from "typeorm";
import { Brand } from "../../brands/brand.entity";
import { Sale } from "../../sales/sale.entity";
import { BaseEntity } from "src/core/base.entity";
import { Category } from "src/category/category.entity";


@Entity()
export class Product extends BaseEntity{
  @Column()
  name: string;

  @ManyToOne(type => Brand, brand => brand.products)
  brand: Brand;

  @ManyToMany(() => Category, category => category.products, { cascade : true })
  category: Category[];

  @ManyToOne(type => Sale, sale=> sale.product)
  sales: Sale[];
  
}