import { Wallet } from './Wallet';
export declare class Address {
    id: number;
    walletId: number;
    coin: string;
    address: string;
    regiDate: Date;
    wallet: Wallet;
}
