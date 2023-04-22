import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsyncs";


const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return (
            <div className="container flex flex-1 items-center justify-center">
                <h1 className="text-3xl font-bold text-yellow-500">Cargando..</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container flex flex-1 items-center justify-center">
                <h1 className="text-3xl font-bold text-yellow-500">Oops! Vuelva a cargar la pagina..</h1>
            </div>
        )
    }

    if (products && products.length === 0) {
        return (
            <div className="container flex flex-1 items-center justify-center">
                <h1 className="text-3xl font-bold text-yellow-500">No hay Productos</h1>
            </div>
        )
    }

    return (
        <div className="container flex flex-col flex-1 items-center justify-center gap-24 py-24 text-center">
            <h1 className="text-3xl font-bold text-white">{greeting}</h1>
            <ItemListMemo products={products}></ItemListMemo>
        </div>
    )
}

export default ItemListContainer;