import { Entity } from '@loopback/repository';
export declare class Counters extends Entity {
    _id?: string;
    seq?: number;
    constructor(data?: Partial<Counters>);
}
