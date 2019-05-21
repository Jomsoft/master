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
const notification_model_1 = require("./notification.model");
let Notifications = class Notifications extends notification_model_1.NotificationModel {
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
], Notifications.prototype, "_id", void 0);
__decorate([
    repository_1.property(),
    __metadata("design:type", String)
], Notifications.prototype, "userId", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], Notifications.prototype, "createdAt", void 0);
Notifications = __decorate([
    repository_1.model({ settings: { strictObjectIDCoercion: false } }),
    __metadata("design:paramtypes", [Object])
], Notifications);
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.model.js.map