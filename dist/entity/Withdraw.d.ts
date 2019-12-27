import { Wallet } from './Wallet';
export declare class Withdraw {
    id: number;
    walletId: number;
    coin: string;
    token: string;
    to: string;
    unit: string;
    amount: string;
    state: string;
    recentDate: Date;
    wallet: Wallet;
}
