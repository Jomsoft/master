import { Count, Filter, Where } from '@loopback/repository';
import { Credential, Users } from '../models';
import { NotificationsRepository, UserRepository } from '../repositories';
import { UserProfile } from '@loopback/authentication';
import { NotificationModel } from "../models/notification.model";
export declare class UserController {
    userRepository: UserRepository;
    private notificationRepository;
    private user;
    constructor(userRepository: UserRepository, notificationRepository: NotificationsRepository, user: UserProfile);
    getUser(): UserProfile;
    login(user: Credential): Promise<{
        _id: string | undefined;
        email: string | undefined;
        role: string;
        token: string;
    }>;
    create(user: Credential): Promise<Users | undefined>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Users[]>;
    updateAll(user: Users, where?: Where): Promise<Count>;
    findById(id: string): Promise<Users>;
    updateById(id: string, user: Users): Promise<void>;
    replaceById(id: string, user: Users): Promise<void>;
    sendNotification(notification: NotificationModel): Promise<Array<string>>;
    deleteById(id: string): Promise<void>;
}
