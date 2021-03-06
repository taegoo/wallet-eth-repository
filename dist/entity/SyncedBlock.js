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
let SyncedBlock = class SyncedBlock {
};
__decorate([
    typeorm_1.PrimaryColumn({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], SyncedBlock.prototype, "coin", void 0);
__decorate([
    typeorm_1.Column({ type: 'bigint' }),
    __metadata("design:type", Number)
], SyncedBlock.prototype, "height", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], SyncedBlock.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'datetime' }),
    __metadata("design:type", Date)
], SyncedBlock.prototype, "updatedDate", void 0);
SyncedBlock = __decorate([
    typeorm_1.Entity('syncedblock')
], SyncedBlock);
exports.SyncedBlock = SyncedBlock;
//# sourceMappingURL=SyncedBlock.js.map