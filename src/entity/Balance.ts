import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Wallet } from './Wallet';
import { EtherDefaultUnit } from 'wallet-api-eth-common';

@Entity('balance')
export class Balance {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'bigint' })
    public walletId: number;

    @Column({ type: 'varchar', length: 8 })
    public coin: string;

    @Column({ type: 'varchar', length: 64 })
    public amount: string;

    @Column({ type: 'varchar', length: 8, default: EtherDefaultUnit })
    public unit: string;

    @UpdateDateColumn({ type: 'datetime' })
    regiDate: Date;

    @ManyToOne(type => Wallet, wallet => wallet.balance)
    wallet: Wallet;
}