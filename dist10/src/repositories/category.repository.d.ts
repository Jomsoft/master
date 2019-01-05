import { DefaultCrudRepository } from '@loopback/repository';
import { Category } from '../models';
import { BillingDataSource } from '../datasources';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
