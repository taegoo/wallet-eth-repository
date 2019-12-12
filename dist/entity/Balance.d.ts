import { Wallet } from './Wallet';
export declare class Balance {
    id: number;
    walletId: number;
    coin: string;
    amount: string;
    unit: string;
    regiDate: Date;
    wallet: Wallet;
}
