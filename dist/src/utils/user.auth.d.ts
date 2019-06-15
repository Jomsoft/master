import { Credential } from './../models/credential.model';
import { UserRepository } from '../repositories/user.repository';
export declare function getAccessTokenForUser(userRepository: UserRepository, credentials: Credential): Promise<{
    _id: string | undefined;
    email: string | undefined;
    role: string;
    token: string;
}>;
export declare function validateCredentials(credentials: Credential): void;
