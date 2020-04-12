import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, Index } from 'typeorm';
import { Wallet } from './Wallet';
import { EtherDefaultUnit } from 'wallet-api-eth-common';

@Entity('history')
export class History {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'bigint' })
    public walletId: number;

    @Index('IX_HISTORY_COIN')
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

    @Column({ type: 'int' })
    public checked: boolean;

    @Index('IX_HISTORY_TXID')
    @Column({ type: 'varchar', length: 96, nullable: true })
    public transactionId: string;

    @CreateDateColumn({ type: 'datetime' })
    regiDate: Date;

    @ManyToOne(type => Wallet, wallet => wallet.history)
    wallet: Wallet;

}
