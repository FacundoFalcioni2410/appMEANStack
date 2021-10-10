import { Address } from './address';
export interface User {
    _id?: string;
    email: string;
    password: string;
    address: Address;
    phoneNumber: number;
    dni: number;
    profile?: string;
    createdAt?: string;
    updatedAt?: string;
}
