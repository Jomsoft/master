import { Entity, model, property } from '@loopback/repository';
import { ObjectId } from 'bson';

@model()
export class AgendaProperties extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string | ObjectId;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'object',
  })
  data?: object;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  priority?: number;

  @property({
    type: 'date',
  })
  nextRunAt?: Date;

  @property({
    type: 'string',
  })
  repeatInterval?: string;

  @property({
    type: 'string',
  })
  repeatTimezone?: string;

  @property({
    type: 'string',
  })
  lastModifiedBy?: string;

  @property({
    type: 'date',
  })
  lockedAt?: Date;

  @property({
    type: 'date',
  })
  lastRunAt?: Date;

  @property({
    type: 'date',
  })
  lastFinishedAt?: Date;

  @property({
    type: 'string',
  })
  failReason?: string;

  @property({
    type: 'number',
  })
  failCount?: number;

  @property({
    type: 'date',
  })
  failedAt?: Date;

  @property({
    type: 'boolean',
  })
  disabled?: boolean;

  constructor(data?: Partial<AgendaProperties>) {
    super(data);
  }
}

