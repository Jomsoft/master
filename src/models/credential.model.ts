import { model, Model, property } from '@loopback/repository';

@model()
export class Credential extends Model {

  @property()
  email?: string;
  @property()
  password: string;
  @property()
  username?: string;
  @property()
  role?: string;
  @property()
  fcmId?: string;

  constructor(data?: Partial<Credential>) {
    super(data);
  }

}
