import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('syncedblock')
export class SyncedBlock {

    @PrimaryColumn({ type: 'varchar', length: 8 })
    public coin: string;

    @Column({ type: 'bigint' })
    public height: number;

    @CreateDateColumn({ type: 'datetime' })
    createdDate: Date;

    @UpdateDateColumn({ type: 'datetime' })
    updatedDate: Date;
}