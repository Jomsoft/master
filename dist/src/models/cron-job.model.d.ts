import { Entity } from '@loopback/repository';
import { CronJobParameters } from 'cron';
export declare class CronJob extends Entity {
    _id?: string;
    startDate?: string;
    terminationDate?: string;
    status?: string;
    issuer?: string;
    runOnStartup?: string;
    cronFunction?: string;
    runDirectly?: string;
    cronObject?: CronJobParameters;
    constructor(data?: Partial<CronJob>);
}
