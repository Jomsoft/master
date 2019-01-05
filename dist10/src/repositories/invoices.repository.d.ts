import { DefaultCrudRepository } from '@loopback/repository';
import { Invoices } from '../models';
import { BillingDataSource } from '../datasources';
export declare class InvoicesRepository extends DefaultCrudRepository<Invoices, typeof Invoices.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
