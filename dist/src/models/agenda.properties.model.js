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
let AgendaProperties = class AgendaProperties extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", Object)
], AgendaProperties.prototype, "_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaProperties.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'object',
    }),
    __metadata("design:type", Object)
], AgendaProperties.prototype, "data", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaProperties.prototype, "type", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], AgendaProperties.prototype, "priority", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], AgendaProperties.prototype, "nextRunAt", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaProperties.prototype, "repeatInterval", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaProperties.prototype, "repeatTimezone", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaProperties.prototype, "lastModifiedBy", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], AgendaProperties.prototype, "lockedAt", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], AgendaProperties.prototype, "lastRunAt", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], AgendaProperties.prototype, "lastFinishedAt", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], AgendaProperties.prototype, "failReason", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], AgendaProperties.prototype, "failCount", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], AgendaProperties.prototype, "failedAt", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], AgendaProperties.prototype, "disabled", void 0);
AgendaProperties = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], AgendaProperties);
exports.AgendaProperties = AgendaProperties;
//# sourceMappingURL=agenda.properties.model.js.map