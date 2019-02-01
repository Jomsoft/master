import { AgendaProperties } from '../models/agenda.properties.model';
import { AgendaDataSource } from './../datasources/agenda.datasource';
import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';

export class AgendaJobsRepository extends DefaultCrudRepository<
  AgendaProperties,
  typeof AgendaProperties.prototype._id
  > {
  constructor(
    @inject('datasources.agenda') dataSource: AgendaDataSource,
  ) {
    super(AgendaProperties, dataSource);
  }
}
