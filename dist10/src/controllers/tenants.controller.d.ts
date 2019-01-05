import { Count, Filter, Where } from '@loopback/repository';
import { Tenants } from '../models';
import { TenantsRepository } from '../repositories';
export declare class TenantsController {
    tenantsRepository: TenantsRepository;
    constructor(tenantsRepository: TenantsRepository);
    create(tenants: Tenants): Promise<Tenants>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Tenants[]>;
    updateAll(tenants: Tenants, where?: Where): Promise<Count>;
    findById(id: string): Promise<Tenants>;
    updateById(id: string, tenants: Tenants): Promise<void>;
    replaceById(id: string, tenants: Tenants): Promise<void>;
    deleteById(id: string): Promise<void>;
    testEndpoint(): Promise<void>;
}
