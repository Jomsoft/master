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
const crypto = __importStar(require("crypto"));
const jwt = __importStar(require("jsonwebtoken"));
let Users = class Users extends repository_1.Entity {
    constructor(data) {
        super(data);
        this.setPassword = function (password) {
            this.salt = crypto.randomBytes(16).toString('hex');
            this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        };
        this.validatePassword = function (password) {
            const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
            console.log(this.hash === hash);
            return this.hash === hash;
        };
        this.generateJWT = function () {
            const today = new Date();
            const expirationDate = new Date(today);
            expirationDate.setDate(today.getDate() + 7);
            return jwt.sign({
                username: this.username,
                email: this.email,
                id: this._id,
                role: this.role,
                exp: parseInt(`${expirationDate.getTime() / 1000}`, 10),
            }, 'KVqfGR5reRMV4Fphyv0isFImYxBxZJCO40tbdNf1SjZD1aVvgiaE465YP9kdWy5');
        };
        this.toAuthJSON = function () {
            return {
                _id: this._id,
                email: this.email,
                role: this.role,
                token: this.generateJWT(),
            };
        };
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Users.prototype, "fcmId", void 0);
__decorate([
    repository_1.property.array(String),
    __metadata("design:type", Array)
], Users.prototype, "listUnits", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Users.prototype, "salt", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Users.prototype, "hash", void 0);
Users = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Users);
exports.Users = Users;
//# sourceMappingURL=user.model.js.map