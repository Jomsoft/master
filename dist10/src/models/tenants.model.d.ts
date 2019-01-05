import { Entity } from '@loopback/repository';
export declare class Tenants extends Entity {
    _id?: string;
    lotNo?: string;
    tenantName?: string;
    moveIn?: string;
    startKwh?: number;
    moveOut?: string;
    status?: string;
    entityCd?: string;
    projectNo?: string;
    tenantNo?: string;
    constructor(data?: Partial<Tenants>);
}
