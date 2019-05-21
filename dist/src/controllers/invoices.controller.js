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
let InvoicesController = class InvoicesController {
    constructor(invoicesRepository) {
        this.invoicesRepository = invoicesRepository;
    }
    async create(invoices) {
        return await this.invoicesRepository.create(invoices);
    }
    async count(where) {
        return await this.invoicesRepository.count(where);
    }
    async find(filter) {
        return await this.invoicesRepository.find(filter);
    }
    async findDistinct(filter) {
        let invoices = await this.invoicesRepository.find(filter);
        let uniqueInvoices = Array.from(new Set(invoices));
        return uniqueInvoices;
    }
    async updateAll(invoices, where) {
        return await this.invoicesRepository.updateAll(invoices, where);
    }
    async findById(id) {
        return await this.invoicesRepository.findById(id);
    }
    async updateById(id, invoices) {
        await this.invoicesRepository.updateById(id, invoices);
    }
    async replaceById(id, invoices) {
        await this.invoicesRepository.replaceById(id, invoices);
    }
    async deleteById(id) {
        await this.invoicesRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/invoices', {
        responses: {
            '200': {
                description: 'Invoices model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Invoices } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Invoices]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "create", null);
__decorate([
    rest_1.get('/invoices/count', {
        responses: {
            '200': {
                description: 'Invoices model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Invoices))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "count", null);
__decorate([
    rest_1.get('/invoices', {
        responses: {
            '200': {
                description: 'Array of Invoices model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Invoices } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Invoices))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "find", null);
__decorate([
    rest_1.get('/invoices/distinct', {
        responses: {
            '200': {
                description: 'Array of unique Invoices model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Invoices } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Invoices))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "findDistinct", null);
__decorate([
    rest_1.patch('/invoices', {
        responses: {
            '200': {
                description: 'Invoices PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Invoices))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Invoices, Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/invoices/{id}', {
        responses: {
            '200': {
                description: 'Invoices model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Invoices } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/invoices/{id}', {
        responses: {
            '204': {
                description: 'Invoices PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Invoices]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/invoices/{id}', {
        responses: {
            '204': {
                description: 'Invoices PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Invoices]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/invoices/{id}', {
        responses: {
            '204': {
                description: 'Invoices DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "deleteById", null);
InvoicesController = __decorate([
    __param(0, repository_1.repository(repositories_1.InvoicesRepository)),
    __metadata("design:paramtypes", [repositories_1.InvoicesRepository])
], InvoicesController);
exports.InvoicesController = InvoicesController;
//# sourceMappingURL=invoices.controller.js.map