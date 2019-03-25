import { AgendaProperties } from '../models/agenda.properties.model';
import { AgendaDataSource } from './../datasources/agenda.datasource';
import { DefaultCrudRepository } from '@loopback/repository';
export declare class AgendaJobsRepository extends DefaultCrudRepository<AgendaProperties, typeof AgendaProperties.prototype._id> {
    constructor(dataSource: AgendaDataSource);
}
