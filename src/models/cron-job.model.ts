import { Entity, model, property } from '@loopback/repository';
import { CronJob as CJob, CronJobParameters } from 'cron';

@model()
export class CronJob extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  terminationDate?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'string',
    default: 'Admin',
  })
  issuer?: string;

  @property({
    type: 'boolean',
    default: 'false',
  })
  runOnStartup?: string;

  @property({
    type: 'string'
  })
  cronFunction?: string;

  @property({
    type: 'string',
    default: 'no',
  })
  runDirectly?: string;

  @property({
    type: 'object',
  })
  cronObject?: CronJobParameters;

  constructor(data?: Partial<CronJob>) {
    super(data);
  }
}
