import {Entity, model, property} from '@loopback/repository';

@model()
export class Counters extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'number',
  })
  seq?: number;

  constructor(data?: Partial<Counters>) {
    super(data);
  }
}
