import { Model, model, property } from '@loopback/repository';

@model()
export class AgendaJob extends Model {

  @property({
    type: 'string',
  })
  names: string;

  @property({
    type: 'object',
  })
  data?: object;

  @property({
    type: 'object',
  })
  options?: object;

  @property({
    type: 'string',
  })
  jobSchedule?: string;

  @property({
    type: 'string',
  })
  jobRepeatEvery?: string | number;

  constructor(data?: Partial<AgendaJob>) {
    super(data);
  }
}


