import {Entity, model, property} from '@loopback/repository';

@model()
export class Meters extends Entity {
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
  serialNo?: string;

  @property({
    type: 'string',
  })
  tariff?: string;

  @property({
    type: 'string',
  })
  installed?: string;

  @property({
    type: 'string',
  })
  dismantled?: string;

  @property({
    type: 'string',
  })
  created?: string;

  @property({
    type: 'string',
  })
  updated?: string;

  constructor(data?: Partial<Meters>) {
    super(data);
  }
}
