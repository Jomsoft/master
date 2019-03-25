import { Model } from '@loopback/repository';
export declare class AgendaJob extends Model {
    names: string;
    data?: object;
    options?: object;
    jobSchedule?: string;
    jobRepeatEvery?: string | number;
    constructor(data?: Partial<AgendaJob>);
}
