import {Entity, model, property} from '@loopback/repository';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

@model()
export class Users extends Entity {

    @property({
        type: 'string',
        id: true,
    })
    _id?: string;

    @property({
        type: 'string',
    })
    username: string;

    @property({
        type: 'string',
    })
    email?: string;

    @property({
        type: 'string',
    })
    role: string;

    @property({
        type: 'string',
    })
    fcmId: string;

    @property.array(String)
    listUnits?: Array<string>;

    @property({
        type: 'string'
    })
    salt?: string;

    @property({
        type: 'string'
    })
    hash?: string;

    constructor(data?: Partial<Users>) {
        super(data);
    }

    setPassword = function (password: string) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };

    validatePassword = function (password: string) {
        const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        console.log(this.hash === hash);
        return this.hash === hash;
    };

    generateJWT = function () {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 7);

        return jwt.sign({
            username: this.username,
            email: this.email,
            id: this._id,
            role: this.role,
            exp: parseInt(`${expirationDate.getTime() / 1000}`, 10),
        }, 'KVqfGR5reRMV4Fphyv0isFImYxBxZJCO40tbdNf1SjZD1aVvgiaE465YP9kdWy5');
    }

    toAuthJSON = function () {
        return {
            _id: this._id,
            email: this.email,
            role: this.role,
            token: this.generateJWT(),
        };
    };
}
