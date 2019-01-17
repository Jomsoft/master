import { Model, model, property } from '@loopback/repository';
import { AgendaProperties } from './agenda.properties.model';

@model()
export class JobAttributes extends Model {

  @property()
  computeNextRunAt: boolean;
  @property()
  disable: boolean;
  @property()
  enable: boolean;
  @property()
  fail: string;
  @property()
  isRunning: boolean;
  @property()
  priority: string | number;
  @property()
  remove: boolean;
  @property()
  repeatAt: string;
  @property()
  repeatEvery: {
    interval: string | number,
    option?: {
      timezone?: string,
      skipImmidiate?: boolean,
    }
  };
  @property()
  run: boolean;
  @property()
  schedule: string | Date;
  @property()
  touch: boolean;
  @property()
  unique: {
    // tslint:disable-next-line:no-any
    value: any, opts?: { insertOnly?: boolean }
  };

  constructor(data?: Partial<JobAttributes>) {
    super(data);
  }
}
@model()
export class AgendaAttributes extends Model {

  @property()
  jobAttributes: JobAttributes;
  @property()
  agendaProperties: AgendaProperties;

  constructor(data?: Partial<AgendaAttributes>) {
    super(data);
  }
}
