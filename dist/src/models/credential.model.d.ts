import { Model } from '@loopback/repository';
export declare class Credential extends Model {
    password: string;
    username?: string;
    email?: string;
    role?: string;
    constructor(data?: Partial<Credential>);
}
