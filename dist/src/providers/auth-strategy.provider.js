"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const user_repository_1 = require("./../repositories/user.repository");
const context_1 = require("@loopback/context");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const util_1 = require("util");
const _ = __importStar(require("lodash"));
const jwt = require('jsonwebtoken');
const verifyAsync = util_1.promisify(jwt.verify);
let AuthStrategyProvider = class AuthStrategyProvider {
    constructor(metadata, userRepository) {
        this.metadata = metadata;
        this.userRepository = userRepository;
    }
    value() {
        // The function was not decorated, so we shouldn't attempt authentication
        if (!this.metadata) {
            return undefined;
        }
        const name = this.metadata.strategy;
        if (name === 'jwt') {
            return new JWTStrategy();
        }
        else {
            return Promise.reject(`The strategy ${name} is not available.`);
        }
    }
};
AuthStrategyProvider = __decorate([
    __param(0, context_1.inject(authentication_1.AuthenticationBindings.METADATA)),
    __param(1, repository_1.repository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [Object, user_repository_1.UserRepository])
], AuthStrategyProvider);
exports.AuthStrategyProvider = AuthStrategyProvider;
class JWTStrategy {
    async authenticate(request) {
        let token = request.query.access_token || request.headers['authorization'];
        if (!token)
            throw new rest_1.HttpErrors.Unauthorized('No access token found!');
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        try {
            const decoded = await verifyAsync(token, 'KVqfGR5reRMV4Fphyv0isFImYxBxZJCO40tbdNf1SjZD1aVvgiaE465YP9kdWy5');
            let user = _.pick(decoded, ['id', 'email', 'username', 'role']);
            user.name = user.username;
            delete user.username;
            console.log(user);
            return user;
        }
        catch (err) {
            Object.assign(err, {
                code: 'INVALID_ACCESS_TOKEN',
                statusCode: 401,
            });
            throw err;
        }
    }
}
exports.JWTStrategy = JWTStrategy;
//# sourceMappingURL=auth-strategy.provider.js.map