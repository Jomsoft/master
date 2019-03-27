import { Model } from '@loopback/repository';
export declare class Credential extends Model {
    email?: string;
    password: string;
    username?: string;
    role?: string;
    constructor(data?: Partial<Credential>);
}
