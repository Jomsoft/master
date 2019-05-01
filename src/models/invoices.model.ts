import { Entity, model, property } from '@loopback/repository';
import { Tenants } from './tenants.model';

@model()
export class Invoices extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  invNo?: string;

  @property()
  invDate?: Date;

  @property({
    type: 'object',
  })
  tenant?: Tenants;

  @property({
    type: 'string',
  })
  serialNo?: string;

  @property({
    type: 'string',
  })
  tariff?: string;

  @property({
    type: 'string',
  })
  minCharge?: string;

  @property({
    type: 'date',
  })
  prevDate?: string;

  @property({
    type: 'number',
  })
  prevRead?: number;

  @property({
    type: 'date',
  })
  currDate?: string;

  @property({
    type: 'number',
  })
  currRead?: number;

  @property({
    type: 'string',
  })
  totalUsage?: string;

  @property({
    type: 'string',
  })
  usageAmount?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  usageBlock?: object[];

  @property({
    type: 'number',
  })
  icptRate?: number;

  @property({
    type: 'number',
  })
  icptAmount?: number;

  @property({
    type: 'number',
  })
  sedaRate?: number;

  @property({
    type: 'number',
  })
  sedaAmount?: number;

  @property({
    type: 'string',
  })
  taxableAmount?: string;

  @property({
    type: 'number',
  })
  taxRate?: number;

  @property({
    type: 'string',
  })
  taxAmount?: string;

  @property({
    type: 'number',
  })
  invAmount?: number;

  constructor(data?: Partial<Invoices>) {
    super(data);
  }
}
