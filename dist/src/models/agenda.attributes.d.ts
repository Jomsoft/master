import { Model } from '@loopback/repository';
import { AgendaProperties } from './agenda.properties.model';
export declare class JobAttributes extends Model {
    computeNextRunAt: boolean;
    disable: boolean;
    enable: boolean;
    fail: string;
    isRunning: boolean;
    priority: string | number;
    remove: boolean;
    repeatAt: string;
    repeatEvery: {
        interval: string | number;
        option?: {
            timezone?: string;
            skipImmidiate?: boolean;
        };
    };
    run: boolean;
    schedule: string | Date;
    touch: boolean;
    unique: {
        value: any;
        opts?: {
            insertOnly?: boolean;
        };
    };
    constructor(data?: Partial<JobAttributes>);
}
export declare class AgendaAttributes extends Model {
    jobAttributes: JobAttributes;
    agendaProperties: AgendaProperties;
    constructor(data?: Partial<AgendaAttributes>);
}
