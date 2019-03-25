/// <reference types="express" />
import { AuthenticationStrategy } from './auth-strategy.provider';
import { Getter, Provider, Setter } from '@loopback/context';
import { Request } from '@loopback/rest';
import { AuthenticateFn, UserProfile } from '@loopback/authentication';
export declare class AuthenticateActionProvider implements Provider<AuthenticateFn> {
    readonly getStrategy: Getter<AuthenticationStrategy>;
    readonly setCurrentUser: Setter<UserProfile>;
    constructor(getStrategy: Getter<AuthenticationStrategy>, setCurrentUser: Setter<UserProfile>);
    /**
     * @returns authenticateFn
     */
    value(): AuthenticateFn;
    /**
     * The implementation of authenticate() sequence action.
     * @param request The incoming request provided by the REST layer
     */
    action(request: Request): Promise<UserProfile | undefined>;
}
