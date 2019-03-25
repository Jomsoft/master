import { Count, Filter, Where } from '@loopback/repository';
import { Units } from '../models';
import { UnitsRepository } from '../repositories';
export declare class UnitsController {
    unitsRepository: UnitsRepository;
    constructor(unitsRepository: UnitsRepository);
    create(units: Units): Promise<Units>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Units[]>;
    updateAll(units: Units, where?: Where): Promise<Count>;
    findById(id: string): Promise<Units>;
    updateById(id: string, units: Units): Promise<void>;
    replaceById(id: string, units: Units): Promise<void>;
    deleteById(id: string): Promise<void>;
}
