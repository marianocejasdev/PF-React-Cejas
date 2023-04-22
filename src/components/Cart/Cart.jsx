import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FaSadCry, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {

    const { cart, total, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container flex flex-col flex-1 items-center justify-center gap-12">
                <i className="text-9xl font-bold text-main-color"><FaSadCry></FaSadCry></i>
                <h1 className="text-3xl font-bold text-main-color">Tu carrito esta vacio!</h1>
                <Link to={'/'} className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'>Seguir Comprando</Link >
            </div>
        )
    }

    return (

        <div className='container flex flex-col flex-1 items-center justify-center text-white gap-24'>

            <h1 className="text-3xl font-bold text-main-color">Carrito</h1>

            <table className="border-collapse table-fixed border border-main-color text-center">

                <thead>
                    <tr>
                        <th className="border border-main-color py-4 px-12">Producto</th>
                        <th className="border border-main-color py-4 px-12">Cantidad</th>
                        <th className="border border-main-color py-4 px-12">Precio</th>
                    </tr>
                </thead>

                {
                    cart.map(prod => {

                        console.log(prod)

                        return (

                            <>
                                <tbody>
                                    <tr>
                                        <td key={prod.id} className="border border-main-color py-4 px-12">{prod.nombre}</td>
                                        <td className="border border-main-color py-4 px-12 flex items-center justify-center gap-4">

                                            <button onClick={() => decrementQuantity(prod.id)} className='flex items-center bg-yellow-500 hover:bg-amber-400 justify-center w-3 h-3 p-3 rounded-full transition-all'>
                                                <i className='text-black'><FaMinus></FaMinus></i>
                                            </button>
                                            {prod.quantity}

                                            <button onClick={() => incrementQuantity(prod.id, prod.stock)} className='flex items-center bg-yellow-500 hover:bg-amber-400 justify-center w-3 h-3 p-3 rounded-full transition-all'>
                                                <i className='text-black'><FaPlus></FaPlus></i>
                                            </button>

                                        </td>

                                        <td className="border border-main-color py-4 px-12">${prod.precio}</td>

                                    </tr>
                                </tbody>
                            </>

                        )

                    })
                }

            </table>

            <h2 className="text-3xl font-bold text-white border-b-4 border-main-color pb-2">Subtotal: ${total}</h2>

            <button onClick={() => clearCart()} className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'>Vaciar carrito</button>

            <div className='flex flex-col items-center justify-center gap-6'>
                <Link to='/' className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'>Seguir Comprando</Link>
                <Link to='/checkout' className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'>Finalizar compra</Link>
            </div>

        </div >

    )
}

export default Cart