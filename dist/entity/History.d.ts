import { Wallet } from './Wallet';
export declare class History {
    id: number;
    walletId: number;
    coin: string;
    type: string;
    requester: string;
    unit: string;
    amount: string;
    fee: string;
    commission: string;
    state: string;
    transactionId: string;
    recentDate: Date;
    regiDate: Date;
    wallet: Wallet;
}
