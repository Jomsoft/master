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
const agenda_properties_model_1 = require("./agenda.properties.model");
let JobAttributes = class JobAttributes extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "computeNextRunAt", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "disable", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "enable", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", String)
], JobAttributes.prototype, "fail", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "isRunning", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Object)
], JobAttributes.prototype, "priority", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "remove", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", String)
], JobAttributes.prototype, "repeatAt", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Object)
], JobAttributes.prototype, "repeatEvery", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "run", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Object)
], JobAttributes.prototype, "schedule", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Boolean)
], JobAttributes.prototype, "touch", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", Object)
], JobAttributes.prototype, "unique", void 0);
JobAttributes = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], JobAttributes);
exports.JobAttributes = JobAttributes;
let AgendaAttributes = class AgendaAttributes extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property(),
    __metadata("design:type", JobAttributes)
], AgendaAttributes.prototype, "jobAttributes", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", agenda_properties_model_1.AgendaProperties)
], AgendaAttributes.prototype, "agendaProperties", void 0);
AgendaAttributes = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], AgendaAttributes);
exports.AgendaAttributes = AgendaAttributes;
//# sourceMappingURL=agenda.attributes.js.map