import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'


const ItemDetail = ({ id, nombre, imagen, precio, descripcion, stock }) => {


    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useNotification()


    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, imagen, precio, quantity, stock
        }
        setQuantity(quantity)
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${nombre}`)
    }



    const productQuantity = getProductQuantity(id)

    return (
        <>
            <img className="drop-shadow-[0_0px_10px_rgba(255,122,0,0.8)] hover:scale-105 transition-all" src={imagen} alt={nombre} />

            <div className="flex flex-col justify-center gap-4">
                <h3 className="font-semibold text-white text-3xl">{nombre}</h3>
                <div className="flex items-center justify-between max-w-xs">
                    <h4 className="font-medium text-white text-xl">${precio}</h4>

                    {
                        stock ? <p className="text-white text-sm">Stock: {stock}</p>

                            : <p className="text-white text-sm">Producto sin Stock</p>
                    }

                </div>

                <p className="text-white text-sm max-w-md">{descripcion}</p>

                <div>

                    {
                        stock ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity || 1}></ItemCount>

                            : <Link to={'/'} className="flex items-center gap-3 justify-center text-dark hover:text-yellow-500 font-medium border-2 border-yellow-500 bg-yellow-500 hover:bg-black rounded-full py-2 px-5 transition-all">Producto sin Stock</Link>
                    }
                </div>


            </div>
        </>
    )
}

export default ItemDetail