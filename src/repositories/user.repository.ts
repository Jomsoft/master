import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Users } from '../models';
import { BillingDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype._id
  > {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Users, dataSource);
  }
}
