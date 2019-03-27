import { Entity } from '@loopback/repository';
export declare class Buildings extends Entity {
    _id?: number;
    name: string;
    description?: string;
    constructor(data?: Partial<Buildings>);
}
