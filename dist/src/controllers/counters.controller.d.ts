import { Count, Filter, Where } from '@loopback/repository';
import { Counters } from '../models';
import { CountersRepository } from '../repositories';
export declare class CountersController {
    countersRepository: CountersRepository;
    constructor(countersRepository: CountersRepository);
    create(counters: Counters): Promise<Counters>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Counters[]>;
    updateAll(counters: Counters, where?: Where): Promise<Count>;
    findById(id: string): Promise<Counters>;
    updateById(id: string, counters: Counters): Promise<void>;
    replaceById(id: string, counters: Counters): Promise<void>;
    deleteById(id: string): Promise<void>;
}
