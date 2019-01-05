import { Entity } from '@loopback/repository';
export declare class Category extends Entity {
    _id?: string;
    category?: string;
    minCharge?: string;
    constructor(data?: Partial<Category>);
}
