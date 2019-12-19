import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Wallet } from './Wallet';

@Entity('address')
@Index('IX_ADDRESS_COIN_ADDRESS', ['coin', 'address'])
export class Address {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'bigint', nullable: true })
    public walletId: number;

    @Column({ type: 'varchar', length: 8 })
    public coin: string;

    @Column({ type: 'varchar', length: 64 })
    public address: string;

    @Column({ type: 'varchar', length: 64 })
    public privateKey: string;

    @CreateDateColumn({ type: 'datetime' })
    regiDate: Date;

    @ManyToOne(type => Wallet, wallet => wallet.address)
    wallet: Wallet;
}