import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if (loading) {
        return (
            <div className="min-h-screen grid items-center justify-center">
                <h1 className="text-3xl font-bold uppercase text-yellow-500">Cargando..</h1>
            </div>
        )
    }

    if (products && products.length === 0) {
        return (
            <div className="min-h-screen grid items-center justify-center">
                <h1 className="text-3xl font-bold uppercase text-yellow-500">No hay Productos</h1>
            </div>
        )
    }

    return (
        <main className="container mx-auto text-center py-20">
            <h1 className="text-3xl font-bold uppercase text-white">{greeting}</h1>
            <ItemList products={products}></ItemList>
        </main>
    )
}

export default ItemListContainer;