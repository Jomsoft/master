import { Units } from './units.model';
import { Invoices } from './invoices.model';
import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';

@model()
export class Tenants extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  lotNo?: string;

  @property({
    type: 'string',
  })
  tenantName?: string;

  @property({
    type: 'string',
  })
  moveIn?: string;

  @property({
    type: 'string',
  })
  moveOut?: string;

  @property({
    type: 'number',
  })
  startKwh?: number;

  @property({
    type: 'string',
  })
  endKwh?: string;

  @property({
    type: 'string',
  })
  tenantNo?: string;

  @hasMany(() => Invoices, { keyTo: 'unitId' })
  invoices?: Invoices[];

  @belongsTo(() => Units, { keyFrom: 'unitId', keyTo: '_id' })
  unitId: string;

  constructor(data?: Partial<Tenants>) {
    super(data);
  }
}
