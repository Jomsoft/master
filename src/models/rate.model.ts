import {Entity, model, property} from '@loopback/repository';

@model()
export class Rate extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  category?: string;

  @property({
    type: 'string',
  })
  from?: string;

  @property({
    type: 'string',
  })
  to?: string;

  @property({
    type: 'string',
  })
  rate?: string;

  constructor(data?: Partial<Rate>) {
    super(data);
  }
}
