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
let History = class History {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], History.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'bigint' }),
    __metadata("design:type", Number)
], History.prototype, "walletId", void 0);
__decorate([
    typeorm_1.Index('IX_HISTORY_COIN'),
    typeorm_1.Column({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], History.prototype, "coin", void 0);
__decorate([
    typeorm_1.Index('IX_HISTORY_TYPE'),
    typeorm_1.Column({ type: 'varchar', length: 12 }),
    __metadata("design:type", String)
], History.prototype, "type", void 0);
__decorate([
    typeorm_1.Index('IX_HISTORY_TOFROM'),
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], History.prototype, "toFrom", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 8, default: wallet_api_eth_common_1.EtherDefaultUnit }),
    __metadata("design:type", String)
], History.prototype, "unit", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], History.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], History.prototype, "fee", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], History.prototype, "commission", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 12 }),
    __metadata("design:type", String)
], History.prototype, "state", void 0);
__decorate([
    typeorm_1.Index('IX_HISTORY_TXID'),
    typeorm_1.Column({ type: 'varchar', length: 96, nullable: true }),
    __metadata("design:type", String)
], History.prototype, "transactionId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], History.prototype, "regiDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Wallet_1.Wallet, wallet => wallet.history),
    __metadata("design:type", Wallet_1.Wallet)
], History.prototype, "wallet", void 0);
History = __decorate([
    typeorm_1.Entity('history')
], History);
exports.History = History;
//# sourceMappingURL=History.js.map