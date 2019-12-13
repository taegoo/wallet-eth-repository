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
const Address_1 = require("./Address");
const Balance_1 = require("./Balance");
const History_1 = require("./History");
let Wallet = class Wallet {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], Wallet.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64, unique: true }),
    __metadata("design:type", String)
], Wallet.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Index('IX_WALLET_ROLE'),
    typeorm_1.Column({ type: 'varchar', length: 12 }),
    __metadata("design:type", String)
], Wallet.prototype, "role", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], Wallet.prototype, "passPharse", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], Wallet.prototype, "regiDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => Address_1.Address, address => address.wallet, {
        cascade: ['insert']
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Wallet.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(type => Balance_1.Balance, balance => balance.wallet, {
        cascade: ['insert']
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Wallet.prototype, "balance", void 0);
__decorate([
    typeorm_1.OneToMany(type => History_1.History, history => history.wallet, {
        cascade: false
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Wallet.prototype, "history", void 0);
__decorate([
    typeorm_1.RelationCount((wallet) => wallet.history),
    __metadata("design:type", Number)
], Wallet.prototype, "historyCount", void 0);
Wallet = __decorate([
    typeorm_1.Entity('wallet')
], Wallet);
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map