import { Entity } from '@loopback/repository';
import { Tenants } from './tenants.model';
export declare class Invoices extends Entity {
    _id?: string;
    invNo?: string;
    invDate?: Date;
    tenant?: Tenants;
    serialNo?: string;
    tariff?: string;
    minCharge?: string;
    prevDate?: string;
    prevRead?: number;
    currDate?: string;
    currRead?: number;
    totalUsage?: string;
    usageAmount?: string;
    usageBlock?: object[];
    icptRate?: number;
    icptAmount?: string;
    sedaRate?: number;
    sedaAmount?: string;
    taxableAmount?: string;
    taxRate?: number;
    taxAmount?: string;
    invAmount?: number;
    constructor(data?: Partial<Invoices>);
}
