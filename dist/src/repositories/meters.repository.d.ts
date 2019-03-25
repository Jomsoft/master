import { DefaultCrudRepository } from '@loopback/repository';
import { Meters } from '../models';
import { BillingDataSource } from '../datasources';
export declare class MetersRepository extends DefaultCrudRepository<Meters, typeof Meters.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
