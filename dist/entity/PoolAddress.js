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
const typeorm_1 = require("typeorm");
let PoolAddress = class PoolAddress {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], PoolAddress.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], PoolAddress.prototype, "coin", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], PoolAddress.prototype, "address", void 0);
__decorate([
    typeorm_1.Index('IX_POOLADDRESS_WALLETID'),
    typeorm_1.Column({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PoolAddress.prototype, "walletId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], PoolAddress.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], PoolAddress.prototype, "updatedDate", void 0);
PoolAddress = __decorate([
    typeorm_1.Entity('pooladdress')
], PoolAddress);
exports.PoolAddress = PoolAddress;
//# sourceMappingURL=PoolAddress.js.map