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
const Wallet_1 = require("./Wallet");
const wallet_api_eth_common_1 = require("wallet-api-eth-common");
let Balance = class Balance {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], Balance.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'bigint' }),
    __metadata("design:type", Number)
], Balance.prototype, "walletId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], Balance.prototype, "coin", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], Balance.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 8, default: wallet_api_eth_common_1.EtherDefaultUnit }),
    __metadata("design:type", String)
], Balance.prototype, "unit", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], Balance.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Wallet_1.Wallet, wallet => wallet.balance),
    __metadata("design:type", Wallet_1.Wallet)
], Balance.prototype, "wallet", void 0);
Balance = __decorate([
    typeorm_1.Entity('balance')
], Balance);
exports.Balance = Balance;
//# sourceMappingURL=Balance.js.map