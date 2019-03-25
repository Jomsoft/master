import { Entity } from '@loopback/repository';
import { ObjectId } from 'bson';
export declare class AgendaProperties extends Entity {
    _id?: string | ObjectId;
    name?: string;
    data?: object;
    type?: string;
    priority?: number;
    nextRunAt?: Date;
    repeatInterval?: string;
    repeatTimezone?: string;
    lastModifiedBy?: string;
    lockedAt?: Date;
    lastRunAt?: Date;
    lastFinishedAt?: Date;
    failReason?: string;
    failCount?: number;
    failedAt?: Date;
    disabled?: boolean;
    constructor(data?: Partial<AgendaProperties>);
}
