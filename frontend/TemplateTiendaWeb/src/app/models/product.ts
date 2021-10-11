export interface Product {
    _id?: string;
    name: string;
    price: number;
    stock: number;
    images: [];
    category: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}
