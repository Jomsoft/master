import { Count, Filter, Where } from '@loopback/repository';
import { Invoices } from '../models';
import { InvoicesRepository } from '../repositories';
export declare class InvoicesController {
    invoicesRepository: InvoicesRepository;
    constructor(invoicesRepository: InvoicesRepository);
    create(invoices: Invoices): Promise<Invoices>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Invoices[]>;
    updateAll(invoices: Invoices, where?: Where): Promise<Count>;
    findById(id: string): Promise<Invoices>;
    updateById(id: string, invoices: Invoices): Promise<void>;
    replaceById(id: string, invoices: Invoices): Promise<void>;
    deleteById(id: string): Promise<void>;
}
