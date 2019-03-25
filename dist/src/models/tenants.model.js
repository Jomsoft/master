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
const units_model_1 = require("./units.model");
const invoices_model_1 = require("./invoices.model");
const repository_1 = require("@loopback/repository");
let Tenants = class Tenants extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Tenants.prototype, "_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "tenantName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "moveIn", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Tenants.prototype, "startKwh", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "moveOut", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "status", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "entityCd", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "projectNo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Tenants.prototype, "tenantNo", void 0);
__decorate([
    repository_1.hasMany(() => invoices_model_1.Invoices, { keyTo: 'unitId' }),
    __metadata("design:type", Array)
], Tenants.prototype, "invoices", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units, { keyFrom: 'unitId', keyTo: '_id' }),
    __metadata("design:type", String)
], Tenants.prototype, "unitId", void 0);
Tenants = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Tenants);
exports.Tenants = Tenants;
//# sourceMappingURL=tenants.model.js.map