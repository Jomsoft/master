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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let NotificationsController = class NotificationsController {
    constructor(notificationsRepository) {
        this.notificationsRepository = notificationsRepository;
    }
    async create(notifications) {
        return await this.notificationsRepository.create(notifications);
    }
    async count(where) {
        return await this.notificationsRepository.count(where);
    }
    async find(filter) {
        return await this.notificationsRepository.find(filter, { strictObjectIDCoercion: true });
    }
    async findById(id) {
        return await this.notificationsRepository.findById(id);
    }
    async updateById(id, notifications) {
        await this.notificationsRepository.updateById(id, notifications);
    }
    async replaceById(id, notifications) {
        await this.notificationsRepository.replaceById(id, notifications);
    }
    async deleteById(id) {
        console.log(id);
        await this.notificationsRepository.deleteById(id);
    }
};
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.post('/notifications', {
        responses: {
            '200': {
                description: 'Notifications model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Notifications } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Notifications]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "create", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/notifications/count', {
        responses: {
            '200': {
                description: 'Notifications model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Notifications))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "count", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/notifications', {
        responses: {
            '200': {
                description: 'Array of Notifications model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Notifications } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Notifications))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "find", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/notifications/{id}', {
        responses: {
            '200': {
                description: 'Notifications model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Notifications } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "findById", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.patch('/notifications/{id}', {
        responses: {
            '204': {
                description: 'Notifications PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Notifications]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "updateById", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.put('/notifications/{id}', {
        responses: {
            '204': {
                description: 'Notifications PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Notifications]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "replaceById", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.del('/notifications/{id}', {
        responses: {
            '204': {
                description: 'Notifications DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "deleteById", null);
NotificationsController = __decorate([
    __param(0, repository_1.repository(repositories_1.NotificationsRepository)),
    __metadata("design:paramtypes", [repositories_1.NotificationsRepository])
], NotificationsController);
exports.NotificationsController = NotificationsController;
//# sourceMappingURL=notifications.controller.js.map