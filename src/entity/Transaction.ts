import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('transaction')
export class Transaction {

    @PrimaryColumn({ type: 'varchar', length: 96 })
    public id: string;

    @Column({ type: 'varchar', length: 8 })
    public coin: string;

    @Column({ type: 'text' })
    public receipt: string;

    @CreateDateColumn({ type: 'datetime' })
    regiDate: Date;

}