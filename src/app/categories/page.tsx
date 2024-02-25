import React from 'react';
import ProductList from "@/components/product_list/product_list";
import CategoryList from "@/components/category_list/category_list";

type CategoriesPageParam = {
    params: {
        category_id: number
    }
}
const CategoriesPage = () => {
    return (
        <div>
            <CategoryList />
        </div>
    );
};

export default CategoriesPage;
