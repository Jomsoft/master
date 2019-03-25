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
let RateController = class RateController {
    constructor(rateRepository) {
        this.rateRepository = rateRepository;
    }
    async create(rate) {
        return await this.rateRepository.create(rate);
    }
    async count(where) {
        return await this.rateRepository.count(where);
    }
    async find(filter) {
        return await this.rateRepository.find(filter);
    }
    async updateAll(rate, where) {
        return await this.rateRepository.updateAll(rate, where);
    }
    async findById(id) {
        return await this.rateRepository.findById(id);
    }
    async updateById(id, rate) {
        await this.rateRepository.updateById(id, rate);
    }
    async replaceById(id, rate) {
        await this.rateRepository.replaceById(id, rate);
    }
    async deleteById(id) {
        await this.rateRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/rates', {
        responses: {
            '200': {
                description: 'Rate model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Rate } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Rate]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "create", null);
__decorate([
    rest_1.get('/rates/count', {
        responses: {
            '200': {
                description: 'Rate model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Rate))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "count", null);
__decorate([
    rest_1.get('/rates', {
        responses: {
            '200': {
                description: 'Array of Rate model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Rate } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Rate))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "find", null);
__decorate([
    rest_1.patch('/rates', {
        responses: {
            '200': {
                description: 'Rate PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Rate))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Rate, Object]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/rates/{id}', {
        responses: {
            '200': {
                description: 'Rate model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Rate } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "findById", null);
__decorate([
    rest_1.patch('/rates/{id}', {
        responses: {
            '204': {
                description: 'Rate PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Rate]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "updateById", null);
__decorate([
    rest_1.put('/rates/{id}', {
        responses: {
            '204': {
                description: 'Rate PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Rate]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/rates/{id}', {
        responses: {
            '204': {
                description: 'Rate DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "deleteById", null);
RateController = __decorate([
    __param(0, repository_1.repository(repositories_1.RateRepository)),
    __metadata("design:paramtypes", [repositories_1.RateRepository])
], RateController);
exports.RateController = RateController;
//# sourceMappingURL=rate.controller.js.map