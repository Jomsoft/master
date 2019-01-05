import { Count, Filter, Where } from '@loopback/repository';
import { Category } from '../models';
import { CategoryRepository } from '../repositories';
export declare class CategoryController {
    categoryRepository: CategoryRepository;
    constructor(categoryRepository: CategoryRepository);
    create(category: Category): Promise<Category>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Category[]>;
    updateAll(category: Category, where?: Where): Promise<Count>;
    findById(id: string): Promise<Category>;
    updateById(id: string, category: Category): Promise<void>;
    replaceById(id: string, category: Category): Promise<void>;
    deleteById(id: string): Promise<void>;
}
