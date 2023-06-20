import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductTarget } from "./product-target-enum"; 

@Entity()
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  sales: number;

  @Column()
  target : ProductTarget;

}