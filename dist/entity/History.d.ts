import { Wallet } from './Wallet';
export declare class History {
    id: number;
    walletId: number;
    coin: string;
    type: string;
    toFrom: string;
    unit: string;
    amount: string;
    fee: string;
    commission: string;
    state: string;
    checked: boolean;
    transactionId: string;
    regiDate: Date;
    wallet: Wallet;
}
