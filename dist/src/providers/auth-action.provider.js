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
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const authentication_1 = require("@loopback/authentication");
let AuthenticateActionProvider = class AuthenticateActionProvider {
    constructor(getStrategy, setCurrentUser) {
        this.getStrategy = getStrategy;
        this.setCurrentUser = setCurrentUser;
    }
    /**
     * @returns authenticateFn
     */
    value() {
        return request => this.action(request);
    }
    /**
     * The implementation of authenticate() sequence action.
     * @param request The incoming request provided by the REST layer
     */
    async action(request) {
        const strategy = await this.getStrategy();
        if (!strategy) {
            // The invoked operation does not require authentication.
            return undefined;
        }
        if (!strategy.authenticate) {
            throw new Error('invalid strategy parameter');
        }
        const user = await strategy.authenticate(request);
        if (user)
            this.setCurrentUser(user);
        return user;
    }
};
AuthenticateActionProvider = __decorate([
    __param(0, context_1.inject.getter(authentication_1.AuthenticationBindings.STRATEGY)),
    __param(1, context_1.inject.setter(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __metadata("design:paramtypes", [Function, Function])
], AuthenticateActionProvider);
exports.AuthenticateActionProvider = AuthenticateActionProvider;
//# sourceMappingURL=auth-action.provider.js.map