import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    _id?: string;
    username: string;
    email?: string;
    role: string;
    fcmId: string;
    listUnits?: Array<string>;
    salt?: string;
    hash?: string;
    constructor(data?: Partial<Users>);
    setPassword: (password: string) => void;
    validatePassword: (password: string) => boolean;
    generateJWT: () => string;
    toAuthJSON: () => {
        _id: string | undefined;
        email: string | undefined;
        role: string;
        token: string;
    };
}
