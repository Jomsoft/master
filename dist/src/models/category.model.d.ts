import { Entity } from '@loopback/repository';
export declare class Category extends Entity {
    _id?: string;
    category?: string;
    minCharge?: string;
    type?: string;
    icptUsage?: string;
    icptRate?: string;
    sedaUsage?: string;
    sedaRate?: string;
    constructor(data?: Partial<Category>);
}
