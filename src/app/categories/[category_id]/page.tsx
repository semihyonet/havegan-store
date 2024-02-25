"use client"

import React from 'react';
import ProductList from "@/components/product_list/product_list";
import {useRouter} from "next/navigation";


type ProductListPageParam = {
    params: {
        category_id: number
    }
}

const ProductListPage = ({params}: ProductListPageParam) => {
    const category_id = params.category_id

    return (
        <div>
            <ProductList category_id={category_id}/>
        </div>
    );
};

export default ProductListPage;
