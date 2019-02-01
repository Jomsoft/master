import { model, Model, property } from '@loopback/repository';

@model()
export class Credential extends Model {

  @property()
  password: string;
  @property()
  username?: string;
  @property()
  email?: string;
  @property()
  role?: string;

  constructor(data?: Partial<Credential>) {
    super(data);
  }

}
