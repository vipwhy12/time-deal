import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/entities/product.entity";

@Entity()
export class Brand extends BaseEntity{
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  name : string

  @Column()
  description: string

  @OneToMany(type => Product, product => product.brand, { eager : true })
  products : Product[]
}