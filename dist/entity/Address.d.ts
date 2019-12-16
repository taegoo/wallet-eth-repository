import { Wallet } from './Wallet';
export declare class Address {
    id: number;
    walletId: number;
    coin: string;
    address: string;
    passPharse: string;
    regiDate: Date;
    updatedDate: Date;
    wallet: Wallet;
}
