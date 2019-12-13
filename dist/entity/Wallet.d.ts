import { Address } from './Address';
import { Balance } from './Balance';
import { History } from './History';
export declare class Wallet {
    id: number;
    uuid: string;
    role: string;
    passPharse: string;
    regiDate: Date;
    address: Address[];
    balance: Balance[];
    history: History[];
    historyCount: number;
}
