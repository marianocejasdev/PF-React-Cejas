import { Link, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsyncs";


const ItemDetailContainer = () => {


    const { itemId } = useParams()

    const getProductWithId = () => getProductById(itemId)

    const { data: product, error, loading } = useAsync(getProductWithId, [itemId])

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

    return (

        itemId === product.id ?

            <div className="container flex flex-1 flex-col items-center justify-center gap-24">

                <h1 className="text-3xl font-bold text-white">Detalle de Producto</h1>

                <div className="grid grid-cols-2 justify-items-center items-center">

                    <ItemDetail {...product}></ItemDetail>

                </div>

            </div>

            :

            <div className="container flex flex-col flex-1 items-center justify-center gap-12">

                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-3xl font-bold text-yellow-500">Oops!</span>
                    <h1 className="text-3xl font-bold text-yellow-500">Hubo un Error</h1>
                </div>

                <Link to="/" className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'><p>Volver al Inicio</p></Link>

            </div>

    )

}

export default ItemDetailContainer;