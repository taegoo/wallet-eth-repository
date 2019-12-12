import { Address } from './Address';
import { Balance } from './Balance';
export declare class Wallet {
    id: number;
    uuid: string;
    role: string;
    passPharse: string;
    regiDate: Date;
    address: Address[];
    balance: Balance[];
}
