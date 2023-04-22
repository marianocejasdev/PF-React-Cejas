import { useState } from 'react'
import { FaMinus, FaPlus, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (

        <div className="flex gap-3 py-5">
            <div className="flex gap-5 justify-between items-center border-2 border-yellow-500 bg-yellow-500 rounded-full py-1 px-2 transition-all">

                <button onClick={decrement} className="flex items-center bg-yellow-500 hover:bg-amber-400 justify-center w-3 h-3 p-3 rounded-full transition-all">
                    <i><FaMinus></FaMinus></i>
                </button>

                <span className="font-medium">{quantity}</span>

                <button onClick={increment} className="flex items-center bg-yellow-500 hover:bg-amber-400 justify-center w-3 h-3 p-3 rounded-full">
                    <i><FaPlus></FaPlus></i>
                </button>

            </div>

            <Link to='/cart' className="flex items-center gap-3 justify-center text-dark hover:text-yellow-500 font-medium border-2 border-yellow-500 bg-yellow-500 hover:bg-black rounded-full py-2 px-5 transition-all" onClick={() => {
                setQuantity(initial)
                onAdd(quantity)
            }}><i><FaCartPlus></FaCartPlus></i>Agregar al Carrito</Link>

        </div>
    )
}

export default ItemCount

