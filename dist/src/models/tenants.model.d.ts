import { Invoices } from './invoices.model';
import { Entity } from '@loopback/repository';
export declare class Tenants extends Entity {
    _id?: string;
    address?: string;
    lotNo?: string;
    tenantName?: string;
    moveIn?: string;
    moveOut?: string;
    startKwh?: number;
    endKwh?: string;
    tenantNo?: string;
    invoices?: Invoices[];
    unitId: string;
    constructor(data?: Partial<Tenants>);
}
