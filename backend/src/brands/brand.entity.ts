import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { BaseEntity } from 'src/core/base.entity';
import { Sale } from 'src/sales/sale.entity';

@Entity()
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];

  @OneToMany(() => Sale, (sale) => sale.brand)
  sales: Sale[];
}
