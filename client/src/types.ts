import { RaRecord, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface Category extends RaRecord {
    name: string;
}

export interface Product extends RaRecord {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}

export interface User extends RaRecord {
    id: Identifier;
    username: string;
    email: string;
    active: boolean;
}

export type OrderStatus = 'ordered' | 'delivered' | 'cancelled';

export interface Order extends RaRecord {
    status: OrderStatus;
    basket: BasketItem[];
    date: Date;
    total: number;
}

export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}

export interface Invoice extends RaRecord {}

export type RoomStatus = 'accepted' | 'pending' | 'rejected';

export interface Room extends RaRecord {
    date: Date;
    status: RoomStatus;
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
