import { DefaultCrudRepository } from '@loopback/repository';
import { Units } from '../models';
import { BillingDataSource } from '../datasources';
export declare class UnitsRepository extends DefaultCrudRepository<Units, typeof Units.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
