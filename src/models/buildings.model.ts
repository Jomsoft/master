import {Entity, model, property} from '@loopback/repository';

@model()
export class Buildings extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  _id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Buildings>) {
    super(data);
  }
}
