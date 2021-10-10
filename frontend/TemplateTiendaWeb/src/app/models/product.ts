export interface Product {
    _id?: string;
    name: string;
    price: number;
    stock: number;
    imagePath: string;
    category: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}
