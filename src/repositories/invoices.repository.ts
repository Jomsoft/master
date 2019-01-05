import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Invoices} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InvoicesRepository extends DefaultCrudRepository<
  Invoices,
  typeof Invoices.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Invoices, dataSource);
  }
}
