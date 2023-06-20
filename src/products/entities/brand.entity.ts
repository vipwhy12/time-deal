import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Brand extends BaseEntity{
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  name : string

  @OneToMany(type => Product, product => product.brand, { eager : true})
  products : Product[]
}