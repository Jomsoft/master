import { Entity } from '@loopback/repository';
export declare class Invoices extends Entity {
    _id?: string;
    invNo?: string;
    invDate?: string;
    tenantNo?: string;
    tenantName?: string;
    lotNo?: string;
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
