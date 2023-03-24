import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)
        getProductsById(itemId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if (loading) {
        return (
            <div className="min-h-screen grid items-center justify-center">
                <h1 className="text-3xl font-bold uppercase text-yellow-500">Cargando..</h1>
            </div>
        )
    }

    return (

        <main className="container mx-auto flex flex-col items-center justify-center py-40">

            <h1 className="text-3xl font-bold text-white">Detalle de Producto</h1>

            <div className="container grid grid-cols-2 justify-items-center items-center p-24">

                <ItemDetail {...product}></ItemDetail>

            </div>

        </main>
    )

}

export default ItemDetailContainer;