import { BaseEntity } from 'src/core/base.entity';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;
}
