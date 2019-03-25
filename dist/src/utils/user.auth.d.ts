import { Credential } from './../models/credential.model';
import { UserRepository } from '../repositories/user.repository';
export declare function getAccessTokenForUser(userRepository: UserRepository, credentials: Credential): Promise<{
    _id: any;
    email: any;
    role: any;
    token: any;
}>;
export declare function validateCredentials(credentials: Credential): void;
