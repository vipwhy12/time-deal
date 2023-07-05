import { Injectable } from '@nestjs/common';
import { SaleRepository } from './sale.repository';

@Injectable()
export class SalesService {

  constructor(private SaleRepository: SaleRepository){}

  
}
