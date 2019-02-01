import { UnitsRepository } from './units.repository';
import { Units } from './../models/units.model';
import { Getter } from '@loopback/context';
import { DefaultCrudRepository, HasManyRepositoryFactory, repository, BelongsToAccessor } from '@loopback/repository';
import { Tenants, Invoices } from '../models';
import { BillingDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { InvoicesRepository } from './invoices.repository';

export class TenantsRepository extends DefaultCrudRepository<
  Tenants,
  typeof Tenants.prototype._id
  > {

  public readonly invoice: HasManyRepositoryFactory<
    Invoices,
    typeof Tenants.prototype.unitId
  >;

  public readonly unit: BelongsToAccessor<
    Units,
    typeof Tenants.prototype._id
  >;

  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
    @repository.getter('InvoicesRepository')
    getInvoicesRepository: Getter<InvoicesRepository>,
    @repository.getter('UnitsRepository')
    unitsRepositoryGetter: Getter<UnitsRepository>,
  ) {
    super(Tenants, dataSource);
    this.unit = this.createBelongsToAccessorFor(
      'unit',
      unitsRepositoryGetter,
    );
    this.invoice = this.createHasManyRepositoryFactoryFor(
      'invoices',
      getInvoicesRepository,
    );
  }
}
