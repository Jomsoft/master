import {Entity, model, property} from '@loopback/repository';

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
    type: 'number',
  })
  startKwh?: number;

  @property({
    type: 'string',
  })
  moveOut?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'string',
  })
  entityCd?: string;

  @property({
    type: 'string',
  })
  projectNo?: string;

  @property({
    type: 'string',
  })
  tenantNo?: string;

  constructor(data?: Partial<Tenants>) {
    super(data);
  }
}
