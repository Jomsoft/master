import { Count, Filter, Where } from '@loopback/repository';
import { Notifications } from '../models';
import { NotificationsRepository } from '../repositories';
export declare class NotificationsController {
    notificationsRepository: NotificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    create(notifications: Notifications): Promise<Notifications>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Notifications[]>;
    findById(id: string): Promise<Notifications>;
    updateById(id: string, notifications: Notifications): Promise<void>;
    replaceById(id: string, notifications: Notifications): Promise<void>;
    deleteById(id: string): Promise<void>;
}
