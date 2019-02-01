import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './agenda.datasource.json';

export class AgendaDataSource extends juggler.DataSource {
  static dataSourceName = 'agenda';

  constructor(
    @inject('datasources.config.agenda', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
