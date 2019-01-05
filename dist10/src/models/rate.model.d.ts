import { Entity } from '@loopback/repository';
export declare class Rate extends Entity {
    _id?: string;
    category?: string;
    from?: string;
    to?: string;
    rate?: string;
    constructor(data?: Partial<Rate>);
}
