import {Entity, model, property} from '@loopback/repository';

@model()
export class Settings extends Entity {
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
  address?: string;

  @property({
    type: 'string',
  })
  tel?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Settings>) {
    super(data);
  }
}
