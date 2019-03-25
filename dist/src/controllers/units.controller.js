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
let UnitsController = class UnitsController {
    constructor(unitsRepository) {
        this.unitsRepository = unitsRepository;
    }
    async create(units) {
        return await this.unitsRepository.create(units);
    }
    async count(where) {
        return await this.unitsRepository.count(where);
    }
    async find(filter) {
        return await this.unitsRepository.find(filter);
    }
    async updateAll(units, where) {
        return await this.unitsRepository.updateAll(units, where);
    }
    async findById(id) {
        return await this.unitsRepository.findById(id);
    }
    async updateById(id, units) {
        await this.unitsRepository.updateById(id, units);
    }
    async replaceById(id, units) {
        await this.unitsRepository.replaceById(id, units);
    }
    async deleteById(id) {
        await this.unitsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/units', {
        responses: {
            '200': {
                description: 'Units model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Units } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Units]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "create", null);
__decorate([
    rest_1.get('/units/count', {
        responses: {
            '200': {
                description: 'Units model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Units))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "count", null);
__decorate([
    rest_1.get('/units', {
        responses: {
            '200': {
                description: 'Array of Units model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Units } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Units))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "find", null);
__decorate([
    rest_1.patch('/units', {
        responses: {
            '200': {
                description: 'Units PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Units))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Units, Object]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/units/{id}', {
        responses: {
            '200': {
                description: 'Units model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Units } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/units/{id}', {
        responses: {
            '204': {
                description: 'Units PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Units]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/units/{id}', {
        responses: {
            '204': {
                description: 'Units PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Units]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/units/{id}', {
        responses: {
            '204': {
                description: 'Units DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "deleteById", null);
UnitsController = __decorate([
    __param(0, repository_1.repository(repositories_1.UnitsRepository)),
    __metadata("design:paramtypes", [repositories_1.UnitsRepository])
], UnitsController);
exports.UnitsController = UnitsController;
//# sourceMappingURL=units.controller.js.map