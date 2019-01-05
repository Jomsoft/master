import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Tenants } from '../models';
import { BillingDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class TenantsRepository extends DefaultCrudRepository<
  Tenants,
  typeof Tenants.prototype._id
  > {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Tenants, dataSource);
  }

  returnTest(): void {
    console.log('service injected');
  }
}
