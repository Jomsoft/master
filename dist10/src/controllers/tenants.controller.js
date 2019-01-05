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
let TenantsController = class TenantsController {
    constructor(tenantsRepository) {
        this.tenantsRepository = tenantsRepository;
    }
    async create(tenants) {
        return await this.tenantsRepository.create(tenants);
    }
    async count(where) {
        console.log('get count');
        return await this.tenantsRepository.count(where);
    }
    async find(filter) {
        return await this.tenantsRepository.find(filter);
    }
    async updateAll(tenants, where) {
        return await this.tenantsRepository.updateAll(tenants, where);
    }
    async findById(id) {
        return await this.tenantsRepository.findById(id);
    }
    async updateById(id, tenants) {
        await this.tenantsRepository.updateById(id, tenants);
    }
    async replaceById(id, tenants) {
        await this.tenantsRepository.replaceById(id, tenants);
    }
    async deleteById(id) {
        await this.tenantsRepository.deleteById(id);
    }
    async testEndpoint() {
        console.log(this.tenantsRepository.modelClass.modelName);
    }
};
__decorate([
    rest_1.post('/tenants', {
        responses: {
            '200': {
                description: 'Tenants model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tenants } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tenants]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "create", null);
__decorate([
    rest_1.get('/tenants/count', {
        responses: {
            '200': {
                description: 'Tenants model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tenants))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "count", null);
__decorate([
    rest_1.get('/tenants', {
        responses: {
            '200': {
                description: 'Array of Tenants model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Tenants } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Tenants))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "find", null);
__decorate([
    rest_1.patch('/tenants', {
        responses: {
            '200': {
                description: 'Tenants PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tenants))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tenants, Object]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/tenants/{id}', {
        responses: {
            '200': {
                description: 'Tenants model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tenants } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenants PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Tenants]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenants PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Tenants]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenants DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "deleteById", null);
__decorate([
    rest_1.get('/tenants/test', {
        responses: {
            '204': {
                description: 'Tenants DELETE success',
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TenantsController.prototype, "testEndpoint", null);
TenantsController = __decorate([
    __param(0, repository_1.repository(repositories_1.TenantsRepository)),
    __metadata("design:paramtypes", [repositories_1.TenantsRepository])
], TenantsController);
exports.TenantsController = TenantsController;
//# sourceMappingURL=tenants.controller.js.map