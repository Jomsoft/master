import { UnitsRepository } from './units.repository';
import { Units } from './../models/units.model';
import { Getter } from '@loopback/context';
import { BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Invoices, Tenants } from '../models';
import { BillingDataSource } from '../datasources';
import { InvoicesRepository } from './invoices.repository';
export declare class TenantsRepository extends DefaultCrudRepository<Tenants, typeof Tenants.prototype._id> {
    readonly invoice: HasManyRepositoryFactory<Invoices, typeof Tenants.prototype.unitId>;
    readonly unit: BelongsToAccessor<Units, typeof Tenants.prototype._id>;
    constructor(dataSource: BillingDataSource, getInvoicesRepository: Getter<InvoicesRepository>, unitsRepositoryGetter: Getter<UnitsRepository>);
}
