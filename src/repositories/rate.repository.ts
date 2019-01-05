import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Rate} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RateRepository extends DefaultCrudRepository<
  Rate,
  typeof Rate.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Rate, dataSource);
  }
}
