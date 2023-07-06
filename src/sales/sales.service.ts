import { Injectable } from '@nestjs/common';
import { SaleRepository } from './sale.repository';
import { Sale } from './sale.entity';

@Injectable()
export class SalesService {

  constructor(private saleRepository: SaleRepository){}

  getAll():Promise<Sale[]>{
    return this.saleRepository.getAll()
  }
}
