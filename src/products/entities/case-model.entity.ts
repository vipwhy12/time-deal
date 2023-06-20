import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}