import { Entity, Column, OneToMany, PrimaryGeneratedColumn, Index, CreateDateColumn, JoinTable, RelationCount } from 'typeorm';
import { Address } from './Address';
import { Balance } from './Balance';
import { History } from './History';

@Entity('wallet')
export class Wallet {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'varchar', length: 64, unique: true })
    public uuid: string;

    @Index('IX_WALLET_ROLE')
    @Column({ type: 'varchar', length: 12 })
    public role: string;

    @CreateDateColumn({ type: 'datetime' })
    regiDate: Date;

    @OneToMany(type => Address, address => address.wallet, {
        cascade: ['insert', 'update']
    })
    @JoinTable()
    address: Address[];

    @OneToMany(type => Balance, balance => balance.wallet, {
        cascade: ['insert', 'update']
    })
    @JoinTable()
    balance: Balance[];


    @OneToMany(type => History, history => history.wallet, {
        cascade: false
    })
    @JoinTable()
    history: History[];

    @RelationCount((wallet: Wallet) => wallet.history)
    historyCount: number;
}