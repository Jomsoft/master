import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './billing.datasource.json';

export class BillingDataSource extends juggler.DataSource {
  static dataSourceName = 'billing';

  constructor(
    @inject('datasources.config.billing', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
