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
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const user_auth_1 = require("../utils/user.auth");
const authentication_1 = require("@loopback/authentication");
const firebase_messaging_1 = require("../utils/firebase-messaging");
const notification_model_1 = require("../models/notification.model");
let UserController = class UserController {
    constructor(userRepository, user) {
        this.userRepository = userRepository;
        this.user = user;
    }
    getUser() {
        return this.user;
    }
    async login(user) {
        let approved = await user_auth_1.getAccessTokenForUser(this.userRepository, user);
        await this.userRepository.updateById(approved._id, {
            fcmId: user.fcmId,
        });
        return approved;
    }
    async create(user) {
        user_auth_1.validateCredentials(user);
        if (user.password && user.role) {
            const finalUser = new models_1.Users({ username: user.username, email: user.email, role: user.role });
            finalUser.setPassword(user.password);
            let savedUser = await this.userRepository.create(finalUser);
            delete savedUser.hash;
            delete savedUser.salt;
            return savedUser;
        }
        else if (!user.password || !user.role)
            throw new rest_1.HttpErrors.UnprocessableEntity('missing password or role');
    }
    async count(where) {
        return await this.userRepository.count(where);
    }
    async find(filter) {
        return await this.userRepository.find(filter);
    }
    async updateAll(user, where) {
        return await this.userRepository.updateAll(user, where);
    }
    async findById(id) {
        let user = await this.userRepository.findById(id);
        delete user.hash;
        delete user.salt;
        return user;
    }
    async updateById(id, user) {
        await this.userRepository.updateById(id, user);
    }
    async replaceById(id, user) {
        await this.userRepository.replaceById(id, user);
    }
    async sendNotification(notification) {
        // This registration token comes from the client FCM SDKs.
        console.log(notification.listUnits);
        let listFcmToken = [];
        let listUser = await this.userRepository.find({
            where: {
                listUnits: { inq: [notification.listUnits] }
            }
        });
        // { inq: listUnits}
        listUser.forEach((user) => {
            listFcmToken.push(user.fcmId);
        });
        listFcmToken.forEach((token) => {
            let message = {
                data: notification.data,
                notification: notification.notification,
                token: token,
                android: {
                    notification: {
                        sound: 'default',
                        color: '#3333ff'
                    }
                }
            };
            firebase_messaging_1.sendMessage(message);
        });
        return listFcmToken;
    }
};
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/users/me'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    rest_1.post('/login', {
        responses: {
            '200': {
                description: 'Login endpoint',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            items: { 'x-ts-type': { '_id': 'string', 'email': 'string', 'token': 'string' } }
                        }
                    }
                },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Credential]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Users } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Credential]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'User model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Users))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "count", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Users } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Users))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Users))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Users, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAll", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Users } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'User PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'User PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
__decorate([
    rest_1.post('/notificationTest', {
        responses: {
            '200': {
                description: 'Notification endpoint',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': notification_model_1.NotificationModel
                        }
                    },
                },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_model_1.NotificationModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sendNotification", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __param(1, core_1.inject(authentication_1.AuthenticationBindings.CURRENT_USER, { optional: true })),
    __metadata("design:paramtypes", [repositories_1.UserRepository, Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map