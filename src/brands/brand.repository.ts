import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { CustomRepository } from "./custom.repository";

@CustomRepository(Brand)
export class BrandRepository extends Repository<Brand>{

  // constructor(private dataSource: DataSource){}
  //   super(Brand, dataSource.createEntityManager())
  // }

  async createBrand(brand: Brand): Promise<Brand>{
    await brand.save();
    return brand;
  }

}