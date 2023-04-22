import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'



const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (

        <Link to="/cart" className='flex items-center justify-center'>

            <span className="inline-flex items-center justify-center bg-main-color text-black text-xs font-semibold p-3 h-3 w-3 rounded-full">{totalQuantity}</span>

            <i className='text-main-color text-2xl'><FaShoppingCart></FaShoppingCart></i>

        </Link>

    )
}

export default CartWidget