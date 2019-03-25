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
const cronjob_1 = require("./../cron/cronjob");
const agenda_attributes_1 = require("../models/agenda.attributes");
const agenda_properties_model_1 = require("../models/agenda.properties.model");
const agendaFunction_1 = require("../cron/agenda/agendaFunction");
const agenda_job_model_1 = require("../models/agenda.job.model");
const rest_1 = require("@loopback/rest");
const cronjob_2 = require("../cron/cronjob");
const repository_1 = require("@loopback/repository");
const agenda_jobs_repository_1 = require("../repositories/agenda-jobs.repository");
let AgendaController = class AgendaController {
    constructor(agendaRepository) {
        this.agendaRepository = agendaRepository;
    }
    async runAgenda() {
        return await cronjob_2.startAgenda();
    }
    async stopAgenda() {
        return await cronjob_1.stopAgenda();
    }
    async getAgendaFunction() {
        return Object.values(agendaFunction_1.AgendaFunction);
    }
    async runAgendaAttributes(agendaAttributes) {
        return cronjob_1.jobAttributesById(agendaAttributes.agendaProperties, agendaAttributes.jobAttributes);
    }
    async count(where) {
        return await this.agendaRepository.count(where);
    }
    async find(filters) {
        let data = await this.agendaRepository.find(filters);
        return data;
    }
    async createJobs(agenda) {
        return await cronjob_2.createJob(agenda);
    }
    async updateAll(agenda, where) {
        return await this.agendaRepository.updateAll(agenda, where);
    }
    async getAgendaById(id, filters) {
        return await this.agendaRepository.findById(id);
    }
    async replaceById(agenda, id) {
        return await this.agendaRepository.replaceById(id, agenda);
    }
    async updateById(agenda, id) {
        console.log(agenda);
        await this.agendaRepository.updateById(id, agenda);
        return { 'response': 'success' };
    }
    async deleteAgenda(id) {
        let data = await this.agendaRepository.findById(id);
        return cronjob_2.deleteJob(data._id);
    }
};
__decorate([
    rest_1.get('/agenda/run', {
        responses: {
            '200': {
                description: 'Run agenda processer',
            }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "runAgenda", null);
__decorate([
    rest_1.get('/agenda/stop', {
        responses: {
            '200': {
                description: 'Stop agenda processer',
            }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "stopAgenda", null);
__decorate([
    rest_1.get('/agenda/function', {
        responses: {
            description: 'Get all function',
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAgendaFunction", null);
__decorate([
    rest_1.post('/agenda/function', {
        responses: {
            '200': {
                description: 'Get all function',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': agenda_attributes_1.AgendaAttributes } },
                    }
                }
            }
        }
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agenda_attributes_1.AgendaAttributes]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "runAgendaAttributes", null);
__decorate([
    rest_1.get('/agenda/count', {
        responses: {
            '200': {
                description: 'Category model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(agenda_properties_model_1.AgendaProperties))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "count", null);
__decorate([
    rest_1.get('/agenda', {
        responses: {
            '200': {
                description: 'Run agenda jobs',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': agenda_properties_model_1.AgendaProperties } },
                    },
                },
            },
        }
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(agenda_properties_model_1.AgendaProperties))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "find", null);
__decorate([
    rest_1.post('/agenda', {
        responses: {
            '200': {
                description: 'Post agenda jobs',
                content: { 'application/json': { 'x-ts-type': agenda_job_model_1.AgendaJob } },
            },
        }
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agenda_job_model_1.AgendaJob]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "createJobs", null);
__decorate([
    rest_1.patch('/agenda', {
        responses: {
            '200': {
                description: 'Category PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(agenda_properties_model_1.AgendaProperties))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agenda_properties_model_1.AgendaProperties, Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/agenda/{id}', {
        responses: {
            '200': {
                description: 'Run agenda jobs',
                content: {
                    'application/json': {
                        schema: { items: { 'x-ts-type': agenda_properties_model_1.AgendaProperties } },
                    },
                },
            },
        }
    }),
    __param(0, rest_1.param.path.string('id')), __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(agenda_properties_model_1.AgendaProperties))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAgendaById", null);
__decorate([
    rest_1.put('/agenda/{id}', {
        responses: {
            '204': {
                description: 'Agenda PUT success',
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agenda_properties_model_1.AgendaProperties, String]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "replaceById", null);
__decorate([
    rest_1.patch('/agenda/{id}', {
        responses: {
            '204': {
                description: 'Agenda PATCH success',
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agenda_properties_model_1.AgendaProperties, String]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "updateById", null);
__decorate([
    rest_1.del('/agenda/{id}', {
        responses: {
            '204': {
                description: 'Agenda DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "deleteAgenda", null);
AgendaController = __decorate([
    __param(0, repository_1.repository(agenda_jobs_repository_1.AgendaJobsRepository)),
    __metadata("design:paramtypes", [agenda_jobs_repository_1.AgendaJobsRepository])
], AgendaController);
exports.AgendaController = AgendaController;
//# sourceMappingURL=agenda.controller.js.map