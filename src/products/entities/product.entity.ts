import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany, OneToMany } from "typeorm";
import { Brand } from "../../brands/brand.entity";
import { Sale } from "../../sales/sale.entity";
import { BaseEntity } from "src/core/base.entity";
import { CategoryProduct } from "./category.products.entity";


@Entity()
export class Product extends BaseEntity{
  @Column()
  name: string;

  @ManyToOne(type => Brand, brand => brand.products)
  brand: Brand;

  @OneToMany(() => CategoryProduct, (categoryProduct) => categoryProduct.product)
  categoryProducts: CategoryProduct[];

  @OneToOne(() => Sale, (sale) => sale.product) // specify inverse side as a second parameter
  @JoinColumn()
  sale: Sale;
}