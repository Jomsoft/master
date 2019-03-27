import { Entity } from '@loopback/repository';
export declare class Settings extends Entity {
    _id?: number;
    name: string;
    address?: string;
    tel?: string;
    email?: string;
    description?: string;
    constructor(data?: Partial<Settings>);
}
