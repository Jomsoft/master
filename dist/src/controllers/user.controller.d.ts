import { Count, Filter, Where } from '@loopback/repository';
import { Credential, Users } from '../models';
import { UserRepository } from '../repositories';
import { UserProfile } from '@loopback/authentication';
import * as admin from "firebase-admin";
export declare class UserController {
    userRepository: UserRepository;
    private user;
    constructor(userRepository: UserRepository, user: UserProfile);
    getUser(): UserProfile;
    login(user: Credential): Promise<{
        _id: any;
        email: any;
        role: any;
        token: any;
    }>;
    create(user: Credential): Promise<Users | undefined>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Users[]>;
    updateAll(user: Users, where?: Where): Promise<Count>;
    findById(id: string): Promise<Users>;
    updateById(id: string, user: Users): Promise<void>;
    replaceById(id: string, user: Users): Promise<void>;
    sendNotification(): Promise<admin.messaging.Message>;
}
