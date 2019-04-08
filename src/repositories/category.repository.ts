import {DefaultCrudRepository} from '@loopback/repository';
import {Category} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Category, dataSource);
  }
}
