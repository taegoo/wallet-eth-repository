import { Entity, Column, OneToMany, PrimaryGeneratedColumn, Index, CreateDateColumn, JoinTable } from 'typeorm';
import { Address } from './Address';
import { Balance } from './Balance';

@Entity('wallet')
export class Wallet {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'varchar', length: 64, unique: true })
    public uuid: string;

    @Index('IX_WALLET_ROLE')
    @Column({ type: 'varchar', length: 12 })
    public role: string;

    @Column({ type: 'varchar', length: 64 })
    public passPharse: string;

    @CreateDateColumn({ type: 'datetime' })
    regiDate: Date;

    @OneToMany(type => Address, address => address.wallet, {
        cascade: ['insert']
    })
    @JoinTable()
    address: Address[];

    @OneToMany(type => Balance, balance => balance.wallet, {
        cascade: ['insert']
    })
    @JoinTable()
    balance: Balance[];
}