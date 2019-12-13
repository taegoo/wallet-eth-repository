import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, JoinColumn, Index } from 'typeorm';
import { Wallet } from './Wallet';
import { EtherDefaultUnit } from 'wallet-api-eth-common';

@Entity('history')
export class History {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'bigint' })
    public walletId: number;

    @Column({ type: 'varchar', length: 8 })
    public coin: string;

    @Index('IX_HISTORY_TYPE')
    @Column({ type: 'varchar', length: 12 })
    public type: string;

    @Index('IX_HISTORY_TOFROM')
    @Column({ type: 'varchar', length: 64 })
    public toFrom: string;

    @Column({ type: 'varchar', length: 8, default: EtherDefaultUnit })
    public unit: string;

    @Column({ type: 'varchar', length: 64 })
    public amount: string;

    @Column({ type: 'varchar', length: 64 })
    public fee: string;

    @Column({ type: 'varchar', length: 64 })
    public commission: string;

    @Column({ type: 'varchar', length: 12 })
    public state: string;

    @Index('IX_HISTORY_TXID')
    @Column({ type: 'varchar', length: 96, nullable: true })
    public transactionId: string;

    @UpdateDateColumn({ type: 'datetime' })
    recentDate: Date;

    @CreateDateColumn({ type: 'datetime' })
    regiDate: Date;

    @ManyToOne(type => Wallet, wallet => wallet.history)
    wallet: Wallet;

}