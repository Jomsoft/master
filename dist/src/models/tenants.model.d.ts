import { Invoices } from './invoices.model';
import { Entity } from '@loopback/repository';
export declare class Tenants extends Entity {
    _id?: string;
    tenantName?: string;
    moveIn?: string;
    startKwh?: number;
    moveOut?: string;
    status?: string;
    entityCd?: string;
    projectNo?: string;
    tenantNo?: string;
    invoices?: Invoices[];
    unitId: string;
    constructor(data?: Partial<Tenants>);
}
