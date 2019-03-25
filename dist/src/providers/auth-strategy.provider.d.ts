/// <reference types="express" />
import { Request } from '@loopback/rest';
import { UserRepository } from './../repositories/user.repository';
import { Provider, ValueOrPromise } from '@loopback/context';
import { Strategy } from 'passport';
import { AuthenticationMetadata, UserProfile } from '@loopback/authentication';
export declare class AuthStrategyProvider implements Provider<Strategy | undefined> {
    private metadata;
    userRepository: UserRepository;
    constructor(metadata: AuthenticationMetadata, userRepository: UserRepository);
    value(): ValueOrPromise<Strategy | undefined>;
}
export declare class JWTStrategy implements AuthenticationStrategy {
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
export interface AuthenticationStrategy {
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
