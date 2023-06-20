import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

}