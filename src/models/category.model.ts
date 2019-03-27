import {Entity, model, property} from '@loopback/repository';
import { type } from 'os';

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

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  icptUsage?: string;

  @property({
    type: 'string',
  })
  icptRate?: string;

  @property({
    type: 'string',
  })
  sedaUsage?: string;

  @property({
    type: 'string',
  })
  sedaRate?: string;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}
