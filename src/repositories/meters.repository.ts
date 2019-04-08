import {DefaultCrudRepository} from '@loopback/repository';
import {Meters} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MetersRepository extends DefaultCrudRepository<
  Meters,
  typeof Meters.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Meters, dataSource);
  }
}
