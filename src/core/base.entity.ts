import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity{
  @PrimaryGeneratedColumn()
  id : number

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt :Date
}