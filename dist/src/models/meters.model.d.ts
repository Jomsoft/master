import { Entity } from '@loopback/repository';
export declare class Meters extends Entity {
    _id?: string;
    lotNo?: string;
    serialNo?: string;
    tariff?: string;
    installed?: string;
    startRead?: number;
    dismantled?: string;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Meters>);
}
