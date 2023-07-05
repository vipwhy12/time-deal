import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Sale } from "./sale.entity";
import { Repository } from "typeorm";


@Injectable()
export class SaleRepository{
  constructor(@InjectRepository(Sale) private saleRepository : Repository<Sale>){}
}