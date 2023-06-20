import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { CaseModel } from "./case-model.entity";

@Entity()
export class Sale extends BaseEntity{
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  count : number

  @OneToOne(()=> Product, (product) => product.sale)
  product:Product;

  @OneToOne(()=> CaseModel, (caseModel) => caseModel.id)
  caseModel:CaseModel;
}