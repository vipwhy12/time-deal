import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fashion extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}