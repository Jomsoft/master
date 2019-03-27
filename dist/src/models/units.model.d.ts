import { Entity } from '@loopback/repository';
export declare class Units extends Entity {
    _id?: string;
    building?: string;
    lotNo?: string;
    constructor(data?: Partial<Units>);
}
