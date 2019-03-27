import { Entity, model, property } from '@loopback/repository';

@model()
export class Units extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  building?: string;

  @property({
    type: 'string',
  })
  lotNo?: string;

  constructor(data?: Partial<Units>) {
    super(data);
  }
}
