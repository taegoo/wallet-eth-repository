import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, Index } from 'typeorm';
import { Wallet } from './Wallet';
import { EtherDefaultUnit } from 'wallet-api-eth-common';

@Entity('sithdraw')
export class Withdraw {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'bigint' })
    public walletId: number;

    @Column({ type: 'varchar', length: 8 })
    public coin: string;

    @Column({ type: 'varchar', length: 32 })
    public token: string;

    @Column({ type: 'varchar', length: 64 })
    public requester: string;

    @Column({ type: 'varchar', length: 64 })
    public to: string;

    @Column({ type: 'varchar', length: 8, default: EtherDefaultUnit })
    public unit: string;

    @Column({ type: 'varchar', length: 64 })
    public amount: string;

    @Column({ type: 'varchar', length: 12 })
    public state: string;

    @CreateDateColumn({ type: 'datetime' })
    recentDate: Date;

}