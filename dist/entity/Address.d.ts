import { Wallet } from './Wallet';
export declare class Address {
    id: number;
    walletId: number;
    coin: string;
    address: string;
    privateKey: string;
    regiDate: Date;
    wallet: Wallet;
}
