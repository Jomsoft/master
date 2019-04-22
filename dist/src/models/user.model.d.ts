import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    _id?: string;
    username: string;
    email?: string;
    role: string;
    fcmId: string;
    listUnits?: Array<String>;
    salt?: string;
    hash?: string;
    constructor(data?: Partial<Users>);
    setPassword: (password: string) => void;
    validatePassword: (password: string) => boolean;
    generateJWT: () => string;
    toAuthJSON: () => {
        _id: any;
        email: any;
        role: any;
        token: any;
    };
}
