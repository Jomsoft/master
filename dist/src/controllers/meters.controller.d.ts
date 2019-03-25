import { Count, Filter, Where } from '@loopback/repository';
import { Meters } from '../models';
import { MetersRepository } from '../repositories';
export declare class MetersController {
    metersRepository: MetersRepository;
    constructor(metersRepository: MetersRepository);
    create(meters: Meters): Promise<Meters>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Meters[]>;
    updateAll(meters: Meters, where?: Where): Promise<Count>;
    findById(id: string): Promise<Meters>;
    updateById(id: string, meters: Meters): Promise<void>;
    replaceById(id: string, meters: Meters): Promise<void>;
    deleteById(id: string): Promise<void>;
}
