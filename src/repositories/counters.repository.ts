import {DefaultCrudRepository} from '@loopback/repository';
import {Counters} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountersRepository extends DefaultCrudRepository<
  Counters,
  typeof Counters.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Counters, dataSource);
  }
}
