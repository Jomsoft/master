import { DefaultCrudRepository } from '@loopback/repository';
import { Users } from '../models';
import { BillingDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<Users, typeof Users.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
