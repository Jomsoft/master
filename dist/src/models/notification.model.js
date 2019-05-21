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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const admin = __importStar(require("firebase-admin"));
let NotificationModel = class NotificationModel extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property.array(String),
    __metadata("design:type", Array)
], NotificationModel.prototype, "listUnits", void 0);
__decorate([
    repository_1.property({
        type: 'object'
    }),
    __metadata("design:type", Object)
], NotificationModel.prototype, "data", void 0);
__decorate([
    repository_1.property({
        type: 'object'
    }),
    __metadata("design:type", Object)
], NotificationModel.prototype, "notification", void 0);
__decorate([
    repository_1.property({
        type: 'object'
    }),
    __metadata("design:type", Object)
], NotificationModel.prototype, "android", void 0);
NotificationModel = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], NotificationModel);
exports.NotificationModel = NotificationModel;
//# sourceMappingURL=notification.model.js.map