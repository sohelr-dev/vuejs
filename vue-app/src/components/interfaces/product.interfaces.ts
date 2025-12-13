export interface Product {
id: number;
name: string;
category_id: number;
description?: string | null;
price: number;
discount?: number | null;
quantity?: number | null;
photo?: string | null;
photo_file?: File | null;
created_at?: string | null;
updated_at?: string | null;
}

const defaultProduct:Product={
     id: 0,
     name: '',
     category_id: 0,
     description: '',
     price: 0,
     discount: 0,
     quantity: 0,
     photo: '' ,
     photo_file: null ,
     created_at: '' ,
     updated_at: '' ,
}
export default defaultProduct;