import {Entity, model, property} from '@loopback/repository';

@model()
export class Category extends Entity {
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
  minCharge?: string;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}
