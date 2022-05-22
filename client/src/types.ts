import { RaRecord, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';


export interface User extends RaRecord {
    id: Identifier;
    username: string;
    email: string;
    active: boolean;
}


export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}



export interface Room extends RaRecord {
    date: Date;
    customer_id: Identifier;
    product_id: Identifier;
}



export interface Notification extends RaRecord {
    id: Identifier;
    deviceId: String;
    config: Object;
    subscriptionaAuth: string;
}
export interface Device extends RaRecord {
    id: Identifier;
    name: String;
    roomId: Identifier;
    config: Object;
    active: boolean;
}

declare global {
    interface Window {
        restServer: any;
    }
}
