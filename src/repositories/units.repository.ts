import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Units} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UnitsRepository extends DefaultCrudRepository<
  Units,
  typeof Units.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Units, dataSource);
  }
}
