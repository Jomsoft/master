import { Count, Filter, Where } from '@loopback/repository';
import { Rate } from '../models';
import { RateRepository } from '../repositories';
export declare class RateController {
    rateRepository: RateRepository;
    constructor(rateRepository: RateRepository);
    create(rate: Rate): Promise<Rate>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Rate[]>;
    updateAll(rate: Rate, where?: Where): Promise<Count>;
    findById(id: string): Promise<Rate>;
    updateById(id: string, rate: Rate): Promise<void>;
    replaceById(id: string, rate: Rate): Promise<void>;
    deleteById(id: string): Promise<void>;
}
