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
let CountersController = class CountersController {
    constructor(countersRepository) {
        this.countersRepository = countersRepository;
    }
    async create(counters) {
        return await this.countersRepository.create(counters);
    }
    async count(where) {
        return await this.countersRepository.count(where);
    }
    async find(filter) {
        return await this.countersRepository.find(filter);
    }
    async updateAll(counters, where) {
        return await this.countersRepository.updateAll(counters, where);
    }
    async findById(id) {
        return await this.countersRepository.findById(id);
    }
    async updateById(id, counters) {
        await this.countersRepository.updateById(id, counters);
    }
    async replaceById(id, counters) {
        await this.countersRepository.replaceById(id, counters);
    }
    async deleteById(id) {
        await this.countersRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/counters', {
        responses: {
            '200': {
                description: 'Counters model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Counters } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Counters]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "create", null);
__decorate([
    rest_1.get('/counters/count', {
        responses: {
            '200': {
                description: 'Counters model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Counters))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "count", null);
__decorate([
    rest_1.get('/counters', {
        responses: {
            '200': {
                description: 'Array of Counters model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Counters } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Counters))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "find", null);
__decorate([
    rest_1.patch('/counters', {
        responses: {
            '200': {
                description: 'Counters PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Counters))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Counters, Object]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/counters/{id}', {
        responses: {
            '200': {
                description: 'Counters model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Counters } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/counters/{id}', {
        responses: {
            '204': {
                description: 'Counters PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Counters]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "updateById", null);
__decorate([
    rest_1.put('/counters/{id}', {
        responses: {
            '204': {
                description: 'Counters PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Counters]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/counters/{id}', {
        responses: {
            '204': {
                description: 'Counters DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountersController.prototype, "deleteById", null);
CountersController = __decorate([
    __param(0, repository_1.repository(repositories_1.CountersRepository)),
    __metadata("design:paramtypes", [repositories_1.CountersRepository])
], CountersController);
exports.CountersController = CountersController;
//# sourceMappingURL=counters.controller.js.map