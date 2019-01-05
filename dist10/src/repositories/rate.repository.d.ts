import { DefaultCrudRepository } from '@loopback/repository';
import { Rate } from '../models';
import { BillingDataSource } from '../datasources';
export declare class RateRepository extends DefaultCrudRepository<Rate, typeof Rate.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
