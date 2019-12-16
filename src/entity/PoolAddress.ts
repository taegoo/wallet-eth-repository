import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index, ManyToOne, UpdateDateColumn } from 'typeorm';

@Entity('pooladdress')
export class PoolAddress {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    public id: number;

    @Column({ type: 'varchar', length: 8 })
    public coin: string;

    @Column({ type: 'varchar', length: 64 })
    public address: string;

    @Index('IX_POOLADDRESS_WALLETID')
    @Column({ type: 'bigint', nullable: true })
    public walletId: number;

    @CreateDateColumn({ type: 'datetime' })
    createdDate: Date;

    @UpdateDateColumn({ type: 'datetime' })
    updatedDate: Date;
}