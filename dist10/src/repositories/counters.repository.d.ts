import { DefaultCrudRepository } from '@loopback/repository';
import { Counters } from '../models';
import { BillingDataSource } from '../datasources';
export declare class CountersRepository extends DefaultCrudRepository<Counters, typeof Counters.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
