"use client"

import React from 'react';
import ProductList from "@/components/product_list/product_list";
import {useRouter} from "next/navigation";

const ProductListPage = ({params}) => {
    const category_id = params.category_id
    console.log(category_id)

    return (
        <div>
            <ProductList category_id={category_id}/>
        </div>
    );
};

export default ProductListPage;
