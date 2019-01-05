import { DefaultCrudRepository } from '@loopback/repository';
import { Tenants } from '../models';
import { BillingDataSource } from '../datasources';
export declare class TenantsRepository extends DefaultCrudRepository<Tenants, typeof Tenants.prototype._id> {
    constructor(dataSource: BillingDataSource);
    returnTest(): void;
}
