import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/entities/product.entity";

@Entity()
export class Sale extends BaseEntity{
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  count : number

  @OneToOne(()=> Product, (product) => product.sale)
  product:Product;

}