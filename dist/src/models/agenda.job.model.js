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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let AgendaJob = class AgendaJob extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaJob.prototype, "names", void 0);
__decorate([
    repository_1.property({
        type: 'object',
    }),
    __metadata("design:type", Object)
], AgendaJob.prototype, "data", void 0);
__decorate([
    repository_1.property({
        type: 'object',
    }),
    __metadata("design:type", Object)
], AgendaJob.prototype, "options", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaJob.prototype, "jobSchedule", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", Object)
], AgendaJob.prototype, "jobRepeatEvery", void 0);
AgendaJob = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], AgendaJob);
exports.AgendaJob = AgendaJob;
//# sourceMappingURL=agenda.job.model.js.map