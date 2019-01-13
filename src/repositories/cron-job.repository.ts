import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { CronJob } from '../models';
import { BillingDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CronJobRepository extends DefaultCrudRepository<
  CronJob,
  typeof CronJob.prototype._id
  > {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(CronJob, dataSource);
  }
}
