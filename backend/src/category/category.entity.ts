import { BaseEntity } from 'src/core/base.entity';
import { Product } from 'src/products/entities/product.entity';
import { Sale } from 'src/sales/sale.entity';
import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
@Tree('closure-table')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.category, { eager: true })
  @JoinTable()
  products: Product[];

  @OneToMany((type) => Sale, (sale) => sale.category)
  sales: Sale[];

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
